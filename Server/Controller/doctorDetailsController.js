const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const Doctor = require("../Models/doctorDetailsModel.js");
require("dotenv").config();

const registerUser = asyncHandler(async (req, res) => {
    const {
        name, email, speciality, phoneNumber, experience, address, password
    } = req.body;

    // Validate all required fields
    if (!name || !email || !speciality || !phoneNumber || !experience || !address || !password) {
        res.status(400);
        throw new Error("Please fill all fields");
    }

    // Check if doctor already exists
    const doctorExists = await Doctor.findOne({ email });
    if (doctorExists) {
        return res.status(400).json({ message: "Doctor already exists" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new doctor user
    const newDoctor = await Doctor.create({
        name,
        email,
        speciality,
        phoneNumber,
        experience,
        address,
        password: hashedPassword,
    });

    res.status(201).json({ message: "Doctor registered successfully", doctor: newDoctor });
});

module.exports = { registerUser };
