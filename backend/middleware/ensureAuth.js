const jwt = require("jsonwebtoken");
const User = require("../models/User");
require("dotenv").config();

const ensureAuth = async (req, res, next) => {
  const bearerToken = req.headers.authorization?.split(" ");
  let extractedToken;
  if (bearerToken?.length > 1 && bearerToken[0] === "Bearer") {
    extractedToken = bearerToken[1];
  }

  if (!extractedToken) {
    return res.status(403).json({ message: "Access denied. Invalid token." });
  }

  try {
    const decodedData = await jwt.verify(
      extractedToken,
      process.env.SECRET_KEY
    );
    const user = await User.findByPk(decodedData.id);
    req.user = user;
    next();
  } catch (error) {
    return res.status(400).json(error);
  }
};

module.exports = ensureAuth;
