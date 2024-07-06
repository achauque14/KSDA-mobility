const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        validate: [valid, "Invalid product name"]
    },
    price: {
        type: Number,
        required: true,
        validate: [valid, "Invalid product price"],
    },
    description:{
        type: String,
        required:true,
        validate: [valid, "Invalid product description"],
    },
    imagePath: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('product', productSchema);
