const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const sequelize = require("./_db");
const authRoutes = require("./routes/authRoutes");
const resumeRoutes = require("./routes/resumeRoutes");
const ensureAuth = require("./middleware/ensureAuth");
const { User, Resume } = require("./models/index");

const PORT = process.env.PORT || 8000;

dotenv.config();

//cors route
app.use(
  cors({
    origin: "http://localhost:5173", // Frontend URL
  })
);

app.use(express.json());

app.get("/skillsnap/verify-user", ensureAuth, (req, res) => {
  res.json({ msg: "User is authenticated", user: req.user });
});

app.use("/skillsnap", authRoutes);

app.use("/skillsnap", ensureAuth, resumeRoutes);

sequelize
  .sync() // Use `alter: true` to adjust the table structure without losing data
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server in running on ${PORT}`);
    });
  })
  .catch((error) => console.log("Error syncing database", error));
