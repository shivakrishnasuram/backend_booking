const User = require('../models/userModel');

exports.registerUser = async (req, res) => {
  try {
    const { name, age, gmail, password, sports } = req.body;

    const newUser = new User({
      name,
      age,
      gmail,
      password,
      sports
    });

    const savedUser = await newUser.save();
    res.status(201).json({ message: 'User registered successfully', user: savedUser });
  } catch (err) {
    res.status(500).json({ error: 'Registration failed', details: err.message });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
};
