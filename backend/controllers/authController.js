const User = require("../models/User");
const jwt = require("jsonwebtoken");
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
    const user = {
      name,
      email,
      password,
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
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    const isPasswordMatch = password;

    if (isPasswordMatch) {
      const token = jwt.sign(
        { id: user.id, email: user.email },
        process.env.SECRET_KEY,
        { expiresIn: "1h" }
      );

      return res.json({ msg: "Authentication successful", token });
    } else {
      return res.status(401).json({ msg: "Invalid password" });
    }
  } catch (err) {
    return res.status(400).json({ msg: "Error authenticating user", err });
  }
};

module.exports = { registerUser, authenticateUser };
