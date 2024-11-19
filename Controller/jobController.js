const Job = require("../Model/jobModel");

exports.postJob = async (req, res) => {
  try {
    const { title, description, company, location, salary } = req.body;
    const adminId = newJob.id;

    const newJob = new jobModel({
      title,
      description,
      company,
      location,
      salary,
      postedBy: adminId,
    });
    await newJob.save();

    res.status(201).json({ message: "Job posted Successfully", job: newJob });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal Server error", error: error.message });
  }
};
