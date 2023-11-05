const {
  logout,
  login,
  refresh,
  resetPasswordRrequest,
  registerVerification,
  resetPassword,
} = require("../controller/authController");

const express = require("express");
const validateToken = require("../middleware/validateTokenHandler");
const router = express.Router();

router.post("/login", login);

router.get("/logout", validateToken, logout);

router.get("/refresh", refresh);

router.post("/reset-password-request", resetPasswordRrequest);

router.post("/email-verification", registerVerification);

router.post("/reset-password", resetPassword);

module.exports = router;
