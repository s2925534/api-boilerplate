// routes.js
const express = require('express');
const router = express.Router();
const authenticate = require('./middleware/authenticate');
const userController = require('./controllers/userController');

// GET /users
router.get('/users', authenticate, userController.getAllUsers);

// GET /users/:id
router.get('/users/:id', authenticate, userController.getUserById);

// POST /users
router.post('/users', authenticate, userController.createUser);

// PUT /users/:id
router.put('/users/:id', authenticate, userController.updateUser);

// DELETE /users/:id
router.delete('/users/:id', authenticate, userController.deleteUser);

module.exports = router;
