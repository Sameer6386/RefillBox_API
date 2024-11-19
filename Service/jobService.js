const Job = require("../Model/jobModel");

exports.createJob = async (jobData) => {
  try {
    const newJob = new Job(jobData);
    const savedJob = await newJob.save();
    return savedJob;
  } catch (error) {
    throw new Error(error.message);
  }
};
