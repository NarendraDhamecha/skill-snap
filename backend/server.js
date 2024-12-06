const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./_db");
const authRoutes = require("./routes/authRoutes");
const resumeRoutes = require("./routes/resumeRoutes");
const ensureAuth = require("./middleware/ensureAuth");

const PORT = process.env.PORT || 8000;

dotenv.config();

//cors route
app.use(
  cors({
    origin: "http://localhost:5173", // Frontend URL
  })
);

app.use(express.json());

app.get("/verify-user", ensureAuth, (req, res) => {
  res.json({ msg: "User is authenticated" });
});

app.use("/skillsnap", authRoutes);

app.use("/skillsnap", ensureAuth, resumeRoutes);

connectDB()
  .then(() => {
    console.log("Database connected successfully");
    app.listen(PORT, () => {
      console.log(`server in running on ${PORT}`);
    });
  })
  .catch((error) => console.log("Database connection failed", error));
