const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    date: {
        type: Date,
        default: Date.now
    },
    products:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('order', orderSchema);
