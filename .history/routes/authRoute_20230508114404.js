import express from "express";
import {} from '../controllers'
// Router object
const router =express.Router();

// Routing

router.post('/register',registerController)

export default router