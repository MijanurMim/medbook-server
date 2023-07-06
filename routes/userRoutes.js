const express = require("express");
const {
  loginController,
  registerController,
  authController,
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

module.exports = router;
