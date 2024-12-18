const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
require("dotenv").config();

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res
      .status(400)
      .json({ msg: "name, email and password is required" });
  }

  if (password.length < 6) {
    return res
      .status(400)
      .json({ msg: "password length should be at least 6" });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = {
      name,
      email,
      password: hashedPassword,
    };
    const newUser = await User.create(user);
    return res
      .status(201)
      .json({ msg: "User created successfully", data: newUser });
  } catch (error) {
    console.log("Getting error while creating user", error);
    return res.status(400).json({ msg: "error", error });
  }
};

const authenticateUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email: email } });

    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    const isPasswordMatch = await bcrypt.compare(password, user?.password);

    if (isPasswordMatch) {
      const token = jwt.sign(
        { id: user.id, email: user.email },
        process.env.SECRET_KEY,
        { expiresIn: "1h" }
      );

      return res.json({ msg: "Authentication successful", token, user });
    } else {
      return res.status(401).json({ msg: "Invalid password" });
    }
  } catch (err) {
    return res.status(400).json({ msg: "Error authenticating user", err });
  }
};

// POST route for forgot password
const forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({ message: "No user found with this email" });
    }

    // Generate a token
    const token = crypto.randomBytes(20).toString("hex");

    // Set token expiration (e.g., 1 hour)
    const tokenExpiry = Date.now() + 3600000; // 1 hour

    // Save token and token expiry in the user record
    user.reset_password_token = token;
    user.token_expiry = tokenExpiry;
    await user.save();

    // Send the reset link via email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "your-email@gmail.com", // Replace with your email
        pass: "your-email-password", // Replace with your email password
      },
    });

    const resetLink = `http://yourdomain.com/reset-password/${token}`;

    await transporter.sendMail({
      from: '"Your App" <your-email@gmail.com>',
      to: user.email,
      subject: "Password Reset Request",
      text: `You requested a password reset. Click the link below to reset your password:\n\n${resetLink}`,
    });

    res.status(200).json({ message: "Password reset link sent to your email" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// POST route for reset password
const resetPassword = async (req, res) => {
  const { token } = req.params;
  const { newPassword } = req.body;

  try {
    // Find the user by token
    const user = await User.findOne({ where: { reset_password_token: token } });

    // If no user found or token has expired
    if (!user || Date.now() > user.token_expiry) {
      return res.status(400).json({ message: "Invalid or expired token" });
    }

    // Hash the new password
    const hashedPassword = bcrypt.hashSync(newPassword, 10);

    // Update the password and clear the token and expiry
    user.password = hashedPassword;
    user.reset_password_token = null;
    user.token_expiry = null;
    await user.save();

    res.status(200).json({ message: "Password has been reset successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  registerUser,
  authenticateUser,
  forgotPassword,
  resetPassword,
};
