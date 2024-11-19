const { body } = require("express-validator");
exports.postJobValidator = [
  body("title").notEmpty().withMessage("Job Title is Required"),
  body("describ").notEmpty().withMessage("Job Title is Required"),
  body("title").notEmpty().withMessage("Job Title is Required"),
  body("title").notEmpty().withMessage("Job Title is Required"),
  body("title").notEmpty().withMessage("Job Title is Required"),
];
