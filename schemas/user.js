const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Enter your username"],
        unique: true,
        validate: [valid, "Invalid username"]
    },
    email: {
        type: String,
        required: [true, "Enter your username"],
        unique: true,
        validate: [valid, "Invalid email"]
    },
    password: {
        type: String,
        required: [true, "Enter your username"],
        validate: [valid, "Invalid password"]
    }
});

module.exports = mongoose.model('user', userSchema);
