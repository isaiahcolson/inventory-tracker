const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema ({
    name: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    reorderLevel: { type: Number, required: true },
    list: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'List'
    }
}, {timestamps:true});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;

// syntax sugar for export model
/* 
module.exports = mongoose.model('Item', new mongoose.Schema ({
    name: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    reorderLevel: { type: Number, required: true },
    list: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'List'
    }
}, {timestamps:true})); 
*/