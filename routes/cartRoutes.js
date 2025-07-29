const express = require("express");
const {
  getCart,
  addToCart,
  clearCart,
  updateQuantity,
  removeFromCart,
} = require("../controllers/cartController");
const { isAuth } = require("../middlewares/authMiddlewares");

const cartRoutes = express.Router();
cartRoutes.get("/cart", isAuth, getCart);
cartRoutes.post("/cart/add", isAuth, addToCart);
cartRoutes.delete("/cart", isAuth, clearCart);
cartRoutes.put("/cart", isAuth, updateQuantity);
cartRoutes.delete("/cart/product", isAuth, removeFromCart);
module.exports = cartRoutes;
