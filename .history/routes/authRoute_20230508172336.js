import express from "express"
import {registerController,loginController} from "../controllers/authController.js"
// Router Object
const router = express.Router();

// Routing
//METHOD POST
router.post('/register',registerController)

//LOGIN -->METHOD POST
router.post('/login',loginController)

// test Route
router.get

export default router;