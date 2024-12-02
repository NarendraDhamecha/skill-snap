const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./_db");
const authRoutes = require("./routes/authRoutes");

const PORT = process.env.PORT || 8000;

dotenv.config();

//cors route
app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hey server is running");
});

app.use("/skillsnap", authRoutes);

connectDB()
  .then(() => {
    console.log("Database connected successfully");
    app.listen(PORT, () => {
      console.log(`server in running on ${PORT}`);
    });
  })
  .catch((error) => console.log("Database connection failed", error));
