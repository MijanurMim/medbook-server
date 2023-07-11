const express = require("express");
const {
  loginController,
  registerController,
  authController,
  applyDoctorController,
  getAllNotificationController,
  deleteAllNotificationController,
  getAllDoctorsController,
  bookAppointmentController,
  userAppointmentsController,
  applyPatientController,
} = require("../controllers/userCtrl");
const authMiddleware = require("../middlewares/authMiddleware");

// router object
const router = express.Router();

// routes
// Login || Post
router.post("/login", loginController);

// Register || post
router.post("/register", registerController);

// Auth || post
router.post("/getUserData", authMiddleware, authController);

// Apply Doctor || post
router.post("/apply-doctor", authMiddleware, applyDoctorController);

// Apply Patient || post
router.post("/apply-patient", authMiddleware, applyPatientController);

//Notification  Doctor || POST
router.post(
  "/get-all-notification",
  authMiddleware,
  getAllNotificationController
);

//Notification  Doctor || POST
router.post(
  "/delete-all-notification",
  authMiddleware,
  deleteAllNotificationController
);

// Get All DOC
router.get("/getAllDoctors", authMiddleware, getAllDoctorsController);

//BOOK APPOINTMENT
router.post("/book-appointment", authMiddleware, bookAppointmentController);

//Appointments List
router.get("/user-appointments", authMiddleware, userAppointmentsController);

//Booking Avliability
// router.post(
//   "/booking-availability",
//   authMiddleware,
//   bookingAvailabilityController
// );

module.exports = router;
