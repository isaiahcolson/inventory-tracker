const mongoose = require('mongoose');

const listSchema = new mongoose.Schema ({
    name: {type:String, required:true},
    user: {type:mongoose.Schema.Types.ObjectID, ref:"User"},
    items: [
        {
            type: mongoose.Schema.Types.ObjectID,  // accept ids only
            ref: 'Item',  // only accept ids from that's from Item
        },
    ],
}, {timestamps:true});

const List = mongoose.model('List', listSchema);

module.exports = List;