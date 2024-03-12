const express = require("express");
const router = express.Router();
const patientController = require("../../controllers/pacientController/authControllerPatient");

// Signup route
router.post("/signup", patientController.signup);

// Signin route
router.post("/signin", patientController.signin);
router.post("/forgetPassword",patientController.forgotPassword)
router.post("/resetPassword",patientController.resetPassword)

module.exports = router;
