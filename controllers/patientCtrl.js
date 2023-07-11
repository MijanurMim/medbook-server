const appointmentModel = require("../models/appointmentModel");
const patientModel = require("../models/patientModel");
const userModel = require("../models/userModels");

const getPatientInfoController = async (req, res) => {
  try {
    const patient = await patientModel.findOne({ userId: req.body.userId });
    res.status(200).send({
      success: true,
      message: "patient data fetch success",
      data: patient,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Fetching patient Details",
    });
  }
};

// update doc profile
const updateProfileController = async (req, res) => {
  try {
    const patient = await patientModel.findOneAndUpdate(
      { userId: req.body.userId },
      req.body
    );
    res.status(201).send({
      success: true,
      message: "patient Profile Updated",
      data: patient,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "patient Profile Update issue",
      error,
    });
  }
};

//get single patient
const getPatientByIdController = async (req, res) => {
  try {
    const patient = await patientModel.findOne({ _id: req.body.patientId });
    res.status(200).send({
      success: true,
      message: "Single Doc Info Fetched",
      data: patient,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Single patient info",
    });
  }
};

const patientAppointmentsController = async (req, res) => {
  try {
    const patient = await patientModel.findOne({ userId: req.body.userId });
    const appointments = await appointmentModel.find({
      patientId: patient._id,
    });
    res.status(200).send({
      success: true,
      message: "patient Appointments fetch Successfully",
      data: appointments,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Doc Appointments",
    });
  }
};

const updateStatusController = async (req, res) => {
  try {
    const { appointmentsId, status } = req.body;
    const appointments = await appointmentModel.findByIdAndUpdate(
      appointmentsId,
      { status }
    );
    const user = await userModel.findOne({ _id: appointments.userId });
    const notification = user.notification;
    notification.push({
      type: "status-updated",
      message: `your appointment has been updated ${status}`,
      onCLickPath: "/patient-appointments",
    });
    await user.save();
    res.status(200).send({
      success: true,
      message: "Appointment Status Updated",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error In Update Status",
    });
  }
};

module.exports = {
  getPatientInfoController,
  updateProfileController,
  getPatientByIdController,
  patientAppointmentsController,
  updateStatusController,
};
