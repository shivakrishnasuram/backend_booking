const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    gmail: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    sport: {
        type: String,
        enum: ['cricket', 'volleyball', 'football', 'badminton', 'tennis'],
        required: true
    }
});

// Explicitly name the collection as 'usersdata'
const User = mongoose.model('User', userSchema, 'usersdata');

module.exports = User;
