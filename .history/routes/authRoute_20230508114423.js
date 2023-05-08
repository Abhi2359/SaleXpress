import express from "express";
import {regi} from '../controllers/authController.js'
// Router object
const router =express.Router();

// Routing

router.post('/register',registerController)

export default router