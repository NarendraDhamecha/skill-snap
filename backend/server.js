const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./_db");
const authRoutes = require("./routes/authRoutes");
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

app.get("/", (req, res) => {
  res.send("hey server is running");
});

app.use("/skillsnap", authRoutes);

app.get("/skillsnap/getData", ensureAuth, (req, res) => {
  res.json([1, 2, 3, 4, 5]);
});

connectDB()
  .then(() => {
    console.log("Database connected successfully");
    app.listen(PORT, () => {
      console.log(`server in running on ${PORT}`);
    });
  })
  .catch((error) => console.log("Database connection failed", error));
