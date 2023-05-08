import express from "express"
import {registerController,loginController,testController} from "../controllers/authController.js"
import { requireSignIn } from "../middlewares/authMiddleware.js";
// Router Object
const router = express.Router();

// Routing
//METHOD POST
router.post('/register',registerController)

//LOGIN -->METHOD POST
router.post('/login',loginController)

// test Route
router.get("/test",re,testController)

export default router;