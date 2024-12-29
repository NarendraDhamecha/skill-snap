const router = require("express").Router();
const resumeController = require('../controllers/resumeController');

router.post("/create-resume", resumeController.createResume);
router.get("/getresumes", resumeController.getResumes);

module.exports = router;
