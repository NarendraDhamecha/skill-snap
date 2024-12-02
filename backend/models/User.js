const mongoose = require("mongoose");
const bcrypt = require("bcryptjs"); // To hash the password before saving

// Create User Schema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    resetPasswordToken: String, // To store token for password reset functionality
    resetPasswordExpires: Date, // To store expiry time for reset token
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

// Password hashing middleware before saving a user
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next(); // If password is not modified, don't hash it again

  try {
    // Hash the password with 10 rounds
    this.password = await bcrypt.hash(this.password, 10);
    next();
  } catch (error) {
    next(error);
  }
});

// Compare entered password with the stored hashed password
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Create and export the User model
const User = mongoose.model("User", userSchema);

module.exports = User;
