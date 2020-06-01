const express = require('express');
const router = express.Router();

const db = require('../models');


// index route
// this route grabs item info and displays it on the lists/index.ejs page
router.get('/', (req,res) => {
    db.Item.find({}, function(err, allItems) {
        if (err) {
            console.log(err);
            res.send({message: 'Internal server error.'});
        } else {
            const context = {items: allItems};
            res.render('lists/index', context);
        }
    });
});



// Show route
router.get('/:id', (req,res) => {
    db.Item.findById(req.params.id, function(err, foundItem) {
        if (err) {
            console.log(err);
            res.send({message: 'Internal server error.'});
        } else {
            const context = {item: foundItem};
            res.render('items/show', context);
        }
    });
});



module.exports = router;