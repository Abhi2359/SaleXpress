import express from "express"
import {registerController,loginController,test} from "../controllers/authController.js"
// Router Object
const router = express.Router();

// Routing
//METHOD POST
router.post('/register',registerController)

//LOGIN -->METHOD POST
router.post('/login',loginController)

// test Route
router.get("test",testController)

export default router;