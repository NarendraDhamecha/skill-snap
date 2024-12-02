const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connectDB = () => {
  return mongoose.connect(process.env.MONGODB_URL);
};

module.exports = connectDB;
