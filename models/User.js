const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        username: {type: String, required: true, unique: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        lists: [
            {
                type: mongoose.Schema.Types.ObjectID,  // accept ids only
                ref: 'List',  // only accept ids from that's from List
            },
        ],
    }, 
    { timestamps: true }
);

 const User = mongoose.model('User', userSchema);

 module.exports = User;