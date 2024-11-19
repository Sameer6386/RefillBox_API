const express = require("express");
const Jobcontroller = require("../Controller/jobController");
const { postJobValidator } = require("../Validator/jobValidator");
const { validate } = require("../Validator/validation");
const { verifyAdmin } = require("../MiddleWare/JobAuth");

const router = express.Router();

router.post(
  "/post",
  verifyAdmin,
  postJobValidator,
  validate,
  Jobcontroller.postJob
);
module.exports = router;
