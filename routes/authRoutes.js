const express = require('express');
const {registerUser} = require('../controller/authController');
const router = express.Router();


// Routes registration 
router.post('/register', registerUser);

module.exports = router;