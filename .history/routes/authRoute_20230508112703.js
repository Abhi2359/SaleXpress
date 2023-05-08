const express =require ("express");
conas
const {registerController} =require( "../controllers/authController.js")
// Router object
const router =express.Router();

// Routing

router.post('/register',registerController)

export default router