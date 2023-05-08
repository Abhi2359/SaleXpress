import express from "express";
import {registerController} from "../controllers/authController"
// Router object
const router =express.Router();

// Routing

router.post('/register',registerController)

export default router