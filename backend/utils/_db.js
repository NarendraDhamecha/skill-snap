const dotenv = require("dotenv");
dotenv.config();

const { Sequelize } = require("sequelize");

//Create a Sequelize instance
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
  }
);

module.exports = sequelize;
