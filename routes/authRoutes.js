const {
  register,
  login,
  logout,
  verifyUser,
} = require("../controllers/authController");

const express = require("express");
const authRoutes = express.Router();
authRoutes.post("/register", register);
authRoutes.post("/login", login);
authRoutes.post("/logout", logout);
authRoutes.get("/verify", verifyUser);

module.exports = authRoutes;
