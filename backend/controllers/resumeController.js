const Resume = require("../models/Resume");

const createResume = async (req, res) => {
  const { name, slug, sections } = req.body;
  try {
    const newResume = new Resume({
      user: req.user._id,
      name,
      slug,
      sections,
    });
    const createdResume = await newResume.save();
    return res.status(201).json({ createdResume });
  } catch (error) {
    return res.status(500).json({ message: "Error creating resume", error });
  }
};

module.exports = { createResume };
