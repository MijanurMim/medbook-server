const express = require("express");

const authMiddleware = require("../middlewares/authMiddleware");
const {
  getPatientInfoController,
  updateProfileController,
  getPatientByIdController,
  patientAppointmentsController,
  updateStatusController,
} = require("../controllers/patientCtrl");

const router = express.Router();

//POST SINGLE PATIENT INFO
router.post("/getPatientInfo", authMiddleware, getPatientInfoController);

//POST UPDATE PROFILE
router.post("/updateProfile", authMiddleware, updateProfileController);

//POST  GET SINGLE PATIENT INFO
router.post("/getPatientById", authMiddleware, getPatientByIdController);

//GET Appointments
router.get(
  "/patient-appointments",
  authMiddleware,
  patientAppointmentsController
);

//POST Update Status
router.post("/update-status", authMiddleware, updateStatusController);

module.exports = router;
