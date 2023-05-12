import {
  categoryControlller,
  createCategoryController,
  deleteCategoryCOntroller,
  singleCategoryController,
  updateCategoryController,
} from "../controllers/categoryController.js";
import express from "express";
import { requireSignIn, isAdmin } from "../middlewares/authMiddleware.js";
const router = express.Router();

// Routes
// Create-category
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  createCategoryController
);

// Update Category
router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  updateCategoryController
);
export default router;

// getAll Category
router.get("/get-category", categoryControlller);

// Get single category
router.get("/single-category/:slug", singleCategoryController);

// Delete Category

router.delete(
  "/delete-category/:id",
  requireSignIn,
  isAdmin,
  deleteCategoryCOntroller
);


