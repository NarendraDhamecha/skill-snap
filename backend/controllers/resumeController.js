const Resume = require("../models/Resume");

const createResume = async (req, res) => {
  const { name, slug, sections } = req.body;
  try {
    const newResume = {
      // user: req.user.id,
      name,
      slug,
      sections,
    };
    const createdResume = await req.user.createResume(newResume);
    return res.status(201).json(createdResume);
  } catch (error) {
    let errorMsg = "Error creating resume";
    if (error?.errors?.length > 0) {
      errorMsg = error.errors[0]?.message || "Error creating resume";
    }
    return res.status(500).json({ message: errorMsg });
  }
};

const getResumes = async (req, res) => {
  try {
    // Fetch all resumes associated with the user instance
    const userResumes = await req.user.getResumes();
    return res.status(200).json(userResumes);
  } catch (error) {
    return res.status(500).json({ message: "Error fetching resumes", error });
  }
};

module.exports = { createResume, getResumes };
