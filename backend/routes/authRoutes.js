const router = require("express").Router();
const authController = require("../controllers/authController");

router.post("/register", authController.registerUser);
router.post("/login", authController.authenticateUser);
router.post("/forgot-password", authController.forgotPassword);
router.post("/reset-password/:token", authController.resetPassword);

module.exports = router;
