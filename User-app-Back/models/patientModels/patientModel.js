const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
    email: { type: String, required: true },
    fullName: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    birthdate: { type: Date, required: true },
    password: { type: String, required: true },
    confirmPassword: { type: String, required: true }
});

const Patient = mongoose.model("Patient", patientSchema);

module.exports = Patient;
