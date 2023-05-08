 express from "express";
import {registerController} from "../controllers/authController.js"
// Router object
const router =express.Router();

// Routing

router.post('/register',registerController)

export default router