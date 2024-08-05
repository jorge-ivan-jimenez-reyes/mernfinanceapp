// routes/product.js
import express from "express";
import Product from "../models/Product.js";

const router = express.Router();

// Ruta para crear un nuevo producto
router.post("/add", async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
});

export default router;
