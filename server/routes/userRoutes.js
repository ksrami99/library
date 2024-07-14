const express = require('express');
const { login } = require('../controllers/userController');
const { signup } = require('../controllers/userController');

const router = express.Router()
router.post('/login',login)
router.post('/register',signup)
module.exports=router