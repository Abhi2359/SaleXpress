import asyncErrorHandler from "../middlewares/catchAsyncError.js";

const express =require ("express");
c
const {registerController} =require( "../controllers/authController.js")
// Router object
const router =express.Router();

// Routing

router.post('/register',registerController)

export default router