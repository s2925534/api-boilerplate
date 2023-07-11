// controllers/userController.js
const User = require('../models/user');

// GET /users
exports.getAllUsers = (req, res) => {
  User.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
};

// GET /users/:id
exports.getUserById = (req, res) => {
  const { id } = req.params;
  User.findById(id)
    .then(user => {
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json(user);
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
};

// POST /users
exports.createUser = (req, res) => {
  const { name, email } = req.body;
  const newUser = new User({ name, email });

  newUser.save()
    .then(user => {
      res.status(201).json(user);
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
};

// PUT /users/:id
exports.updateUser = (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;

  User.findByIdAndUpdate(id, { name, email }, { new: true })
    .then(user => {
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json(user);
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
};

// DELETE /users/:id
exports.deleteUser = (req, res) => {
  const { id } = req.params;

  User.findByIdAndDelete(id)
    .then(user => {
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json({ message: 'User deleted successfully' });
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
};
