const mongoose = require('mongoose');

const listSchema = new mongoose.Schema ({
    name: {type:String, required:true},
    user: {type:mongoose.Schema.Types.ObjectID, ref:"User"},
    items: [
        {
            type:mongoose.Schema.Types.ObjectID, ref:"Item",
            ref: 'Item',
        },
    ],
}, {timestamps:true});

const List = mongoose.model('List', listSchema);

module.exports = List;