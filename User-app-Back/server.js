const express = require("express");
const mongoose = require("mongoose");
const doctorAuthRoutes = require("./routes/doctorRoutes/doctorAuthRoutes");
const patientAuthRoutes = require("./routes/patientRoutes/patientAuthRoutes");
const app = express();
const port = 3000;

mongoose
  .connect("mongodb://localhost:27017/userApp-database", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
    // You may choose to exit the process only if MongoDB connection is critical for your app
    // process.exit(1);
  });

// Middleware to parse JSON request bodies
app.use(express.json());

// Mount authentication routes
app.use("/authDoctor", doctorAuthRoutes);
app.use("/authPatient", patientAuthRoutes);

// Start the server
app.listen(port, () => {
  
  console.log(`Server is running on http://localhost:${port}`);
});
