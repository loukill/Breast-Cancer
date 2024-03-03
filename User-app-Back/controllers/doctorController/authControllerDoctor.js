const bcrypt = require("bcrypt");
const Doctor = require("../../models/doctorModels/doctorModel");

exports.signup = async (req, res) => {
  try {
    const {
      email,
      fullName,
      phoneNumber,
      specialization,
      experience,
      password,
      confirmPassword,
      diplomeImage,
    } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // Add a check for experience here
    const currentYear = new Date().getFullYear();
    const doctorExperience = parseInt(experience); // Assuming experience is in years
    const doctorJoiningYear = currentYear - doctorExperience;

    // Assuming that the doctor should have at least 1 year of experience
    if (doctorJoiningYear > currentYear - 1) {
      return res.status(400).json({ error: "Invalid experience" });
    }

    const newDoctor = new Doctor({
      email,
      fullName,
      phoneNumber,
      specialization,
      experience: doctorExperience, // Save parsed integer value
      password: hashedPassword,
      confirmPassword,
      diplomeImage,
    });

    const savedDoctor = await newDoctor.save();

    res.status(201).json(savedDoctor); // Respond with the saved doctor data
    console.log(res, "dataaaaaaaaaaaaaaaaaaaaaaa");
  } catch (error) {
    console.error("Error creating new doctor:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.signIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    const doctor = await Doctor.findOne({ email });
    if (!doctor) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const isPasswordValid = await bcrypt.compare(password, doctor.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    res.status(200).json(doctor);
  } catch (error) {
    console.error("Error signing in:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
