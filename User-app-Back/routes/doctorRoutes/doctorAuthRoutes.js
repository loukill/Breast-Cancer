// routes/authRoutes.js

const express = require("express");
const router = express.Router();
const authControllerDoctor = require("../../controllers/doctorController/authControllerDoctor");

// Doctor sign-in route
router.post("/signup", authControllerDoctor.signup);
router.post("/signin", authControllerDoctor.signIn);

module.exports = router;
