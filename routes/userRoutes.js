const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Register route
router.post('/register', userController.registerUser);

// Optional: Fetch all users
router.get('/users', userController.getAllUsers);

module.exports = router;
