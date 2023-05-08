const express =require ("express");
const {registerController} =requuire "../controllers/authController.js"
// Router object
const router =express.Router();

// Routing

router.post('/register',registerController)

export default router