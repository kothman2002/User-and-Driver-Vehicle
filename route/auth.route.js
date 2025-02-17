const express = require('express');
const router = express.Router();
const { validateSignup } = require("../middleware/validation.middleware");
const authController = require('../controller/auth.controller');
const { authenticate } = require("../middleware/auth.middleware");

router.get("/protected", authenticate, (req, res) => {
    res.json({ message: "You have access!", user: req.user });
});


//https://www.youtube.com/watch?v=6RMMvPhp8nY&list=PLDQ11FgmbqQO6KEhqLzT_USha4ZysXY2C
// User Signup 
router.post('/signup',authController.signup);

// User Login
router.post("/login", authController.login);

router.post("/signup", validateSignup, authController.signup);



module.exports = router;