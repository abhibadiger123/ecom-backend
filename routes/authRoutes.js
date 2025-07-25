const { register, login, logout } = require("../controllers/authController");

const express = require("express");
const authRoutes = express.Router();
authRoutes.post("/register", register);
authRoutes.post("/login", login);
authRoutes.post("/logout", logout);

module.exports = authRoutes;
