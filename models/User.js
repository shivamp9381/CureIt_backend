const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String },
  role: { type: String, enum: ["patient", "doctor", "admin"], required: true },
  specialization: { type: String }, // only for doctors
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("User", userSchema);
