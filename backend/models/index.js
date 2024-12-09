const User = require("./User");
const Resume = require("./Resume");

// One-to-Many Relationship: A user can have multiple resumes
User.hasMany(Resume, {
  foreignKey: "userId",
  onDelete: "CASCADE", // Deletes associated resumes when a user is deleted
});

Resume.belongsTo(User, {
  foreignKey: "userId",
});

module.exports = { User, Resume };
