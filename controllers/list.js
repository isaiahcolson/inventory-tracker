const express = require('express');
const router = express.Router();

const db = require('../models');


// Index route
router.get('/', (req,res) => {
    db.List.find({}, function(err, allLists) {
        if (err) {
            console.log(err);
            res.send({message: 'Internal server error.'});
        } else {
            const context = {lists: allLists};
            res.render('lists/index', context);
        }
    });
});

// Create new list route
router.get('/new', (req,res) =>{
    res.render('lists/new');
})

// Create route
router.post('/', (req,res) => {
    db.List.create(req.body, function(err,createdList) {
        if (err) {
            console.log(err);
            res.send({message: 'Internal server error.'});
        } else {
            res.redirect('/lists');
        }
    });
});



// Show route
router.get('/:id', (req,res) => {
    db.List.findById(req.params.id, function(err, foundList) {
        if (err) {
            console.log(err);
            res.send({message: 'Internal server error.'});
        } else {
            const context = {list: foundList};
            res.render('lists/show', context);
        }
    })
})

// Edit route
router.get('/:id/edit', (req,res) => {
    db.List.findById(req.params.id, function(err, foundList) {
        if (err) {
            console.log(err);
            res.send({message: 'Internal server error.'});
        } else {
            const context = {list: foundList};
            res.render('lists/edit', context);
        }
    })
})



// Update route
router.put('/:id', (req,res) => {
    db.List.findByIdAndUpdate(req.params.id,req.body,{new:true}, function(err, foundList) {
        if (err) {
            console.log(err);
            res.send({message: 'Internal server error.'});
        } else {
            res.redirect(`/lists/${updatedList._id})`);
        }
    })
})



// export router
module.exports = router;