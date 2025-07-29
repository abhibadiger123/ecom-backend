const express = require("express");
const {
  verifyPayment,
  createRazorpayOrder,
} = require("../controllers/orderControllers");
const { isAuth } = require("../middlewares/authMiddlewares");
const orderRoutes = express.Router();
orderRoutes.post("/create-razorpay-order", isAuth, createRazorpayOrder);
orderRoutes.post("/verify-payment", isAuth, verifyPayment);
module.exports = orderRoutes;
