const express = require("express");
const {
  getAllDoctorsController,
  getAllUsersController,
  changeAccountStatusController,
  getAllPatientsController,
  changePatientAccountStatusController,
} = require("../controllers/adminCtrl");

const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

//GET METHOD || USERS
router.get("/getAllUsers", authMiddleware, getAllUsersController);

//GET METHOD || DOCTORS
router.get("/getAllDoctors", authMiddleware, getAllDoctorsController);

//GET METHOD || patients
router.get("/getAllPatients", authMiddleware, getAllPatientsController);

//POST ACCOUNT STATUS
router.post(
  "/changeAccountStatus",
  authMiddleware,
  changeAccountStatusController
);

//POST ACCOUNT STATUS
router.post(
  "/changeAccountStatus-patient",
  authMiddleware,
  changePatientAccountStatusController
);

module.exports = router;
