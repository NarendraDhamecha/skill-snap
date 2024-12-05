const router = require("express").Router();
const resumeController = require('../controllers/resumeController');

router.post("/create-resume", resumeController.createResume);

module.exports = router;
