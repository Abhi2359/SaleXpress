import  {createCategoryController } from "../controllers/categoryController.js";
import express from 'express';
import {requireSignIn,isAdmin} from "../middlewares/authMiddleware.js"
const router = express.Router();


// Routes
router.post("/create-category",requireSignIn,isAdmin,createCategoryController)


export default router;