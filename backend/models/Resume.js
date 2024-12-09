const { DataTypes } = require("sequelize");
const sequelize = require("../_db");

const Resume = sequelize.define("Resume", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  slug: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },

  sections: {
    type: DataTypes.JSON,
  },
});

module.exports = Resume
