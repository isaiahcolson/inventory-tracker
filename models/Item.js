const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema ({
    name: {type: String},
    category: {type: String},
    price: {type: Number},
    quantity: {type: Number},
    list: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'List'
    }
}, {timestamps:true});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;

