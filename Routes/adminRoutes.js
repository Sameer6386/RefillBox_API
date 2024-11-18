const express = require("express");
const adminController = require("../Controller/AdminController");
const {
  signupValidator,
  loginValidator,
} = require("../Validator/adminValidator");
const { validate } = require("../Validator/validation");

const router = express.Router();

router.post("/signup", signupValidator, validate, adminController.signup);
router.post("/login", loginValidator, validate, adminController.login);

module.exports = router;
