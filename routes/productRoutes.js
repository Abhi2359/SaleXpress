import express from "express";
import { requireSignIn, isAdmin } from "../middlewares/authMiddleware.js";
import {
  createProductController,
  deleteProductController,
  getProductController,
  getSingleProductController,
  productPhotoController,
  updateProductController,
} from "../controllers/productController.js";
import formidable from "express-formidable";
const router = express.Router();

//Routes
// Create Product
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);
// Update Product

router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);

//get All Products
router.get("/get-products", getProductController);

// get Single Product
router.get("/get-product/:slug", getSingleProductController);

// get Product Photo
router.get("/product-photo/:pid", productPhotoController);

// delete Product
router.delete("/delete-product/:pid", deleteProductController);

export default router;
