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
    console.log('Beep');
    db.Item.create(req.body, function(err,createdItem) {
        if (err) {
            console.log(err);
            res.send({message: 'Internal server error.'});
        } else {
            console.log(createdItem);
            db.List.findById(createdItem.list,function(err,foundList){
                if (err){
                    console.log(err);
                    res.send({message: 'Internal server error.'});
                } else {
                    console.log(foundList);
                    foundList.items.push(createdItem); // add item to the found list
                    foundList.save();  // will save the info back to the db
                    res.redirect(`/lists/${foundList._id}`);
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


// Edit route
router.get('/:id/edit', (req,res) => {
    db.Item.findById(req.params.id, function(err, foundItem) {
        if (err) {
            console.log(err);
            res.send({message: 'Internal server error.'});
        } else {

                const context = {item: foundItem};
                res.render('items/edit', context);

        }
    })
})


// Update route for item
// TODO - modify redirect to lists/object_id page instead of main list page

router.put('/:id', (req,res) => {
    const itemsData = {
        $set:{
          name: req.body.name,
          category: req.body.category,
          price: req.body.price,
          quantity: req.body.quantity,
        }
    }
    db.Item.findByIdAndUpdate(req.params.id,req.body,{new:true}, function(err, updatedItem) {
        if (err) {
            console.log(err);
            res.send({message: 'Internal server error.'});
        } else {
            console.log(updatedItem);
            res.redirect('/lists');
        }
    })
})

// TODO Delete route for item

module.exports = router;