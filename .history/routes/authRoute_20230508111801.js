import express from "express";
import {regis}
// Router object
const router =express.Router();

// Routing

router.post('/register',registerController)

export default router