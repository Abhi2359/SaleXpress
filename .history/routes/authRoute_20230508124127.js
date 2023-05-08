import express from "express"
import {registerController} from "../controllers/authController.js"
// Router Object
const router = express.Router();

// Routing
//METHOD POST
router.post('/register',registerController)

//LOGIN METHOD
export default router;