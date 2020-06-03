const mongoose = require('mongoose');

const listSchema = new mongoose.Schema ({
    name: {type:String, required:true},
    items: [
        {
            type: mongoose.Schema.Types.ObjectID,  // accept ids only
            ref: 'Item',  // only accept ids that's from Item
        },
    ],
    user: {
        type: mongoose.Schema.Types.ObjectID, 
        ref:"User",
    },
}, {timestamps:true});

const List = mongoose.model('List', listSchema);

module.exports = List;