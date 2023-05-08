import express from "express"
import {} from "../"
// Router Object
const router = express.Router();

// Routing
router.post('/register',registerController)

export default router;