const express = require('express');
const { signupValidation, loginValidation } = require('../middleware/AuthValidation.js');
const { signup, login } = require('../controllers/AuthController.js');
const router = express.Router();   

router.post('/login', loginValidation,login);
router.post('/signup', signupValidation,signup);

module.exports = router;