import express from "express"
import {registerController} from "../controllers/authController.js"
// Router Object
const router = express.Router();

// Routing
//
router.post('/register',registerController)

export default router;