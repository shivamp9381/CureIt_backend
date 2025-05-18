const Appointment = require("../models/Appointment");

exports.bookAppointment = async (req, res) => {
  try {
    const appointment = new Appointment(req.body);
    await appointment.save();
    res.status(201).json({ message: "Appointment booked successfully!" });
  } catch (err) {
    res.status(500).json({ error: "Failed to book appointment", details: err.message });
  }
};

exports.getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find().sort({ createdAt: -1 });
    res.status(200).json(appointments);
  } catch (err) {
    res.status(500).json({ error: "Failed to retrieve appointments", details: err.message });
  }
};
