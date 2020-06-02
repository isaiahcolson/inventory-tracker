const express = require('express');
const router = express.Router();

const db = require('../models');


// Index route
// this route grabs item info and displays it on the lists/index.ejs page
router.get('/', (req,res) => {
    db.Item.find({}, function(err, allItems) {
        if (err) {
            console.log(err);
            res.send({message: 'Internal server error.'});
        } else {
            const context = {items: allItems};
            res.render('lists/show', context);
        }
    });
});


// Create new item route
router.get('/new', (req,res) =>{
    db.List.find({}, function(err, allLists){
        if (err) {
            console.log(err);
            res.send({message: 'Internal server error.'});
        } else {
            console.log(allLists);
            const context = {lists: allLists};
            res.render('items/new', context);
        }
    });
});

// Create route that posts the new info
router.post('/', (req,res) => {
    db.Item.create(req.body, function(err,createdItem) {
        if (err) {
            console.log(err);
            res.send({message: 'Internal server error.'});
        } else {
            console.log(createdItem);
            // this line of code below might be the root cause of the error message
            // both Item and List object ids are present when landed at http://localhost:4000/items/new
            // code block 23-34 produces a list object id after clicking onto Add New Item
            // somehow one of the list object ids is not referenced upon filling in new items details and submitting the form
            // console log shows 'null' for list object id
            // an alternative solution might be to allow users to manually select the 'inventory' during the 'item' creation process
            // or modify the list/show.ejs 
            db.List.findById(createdItem.list,function(err,foundList){
                if (err){
                    console.log(err);
                    res.send({message: 'Internal server error.'});
                } else {
                    console.log(foundList);
                    foundList.items.push(createdItem); // add item to the found list
                    foundList.save();  // will save the info back to the db
                    res.redirect('/lists/show');
                }
            });
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