const { DataTypes } = require("sequelize");
const sequelize = require("../utils/_db");

const User = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  reset_password_token: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  token_expiry: {
    type: DataTypes.DATE,
    allowNull: true,
  },
});

module.exports = User;
