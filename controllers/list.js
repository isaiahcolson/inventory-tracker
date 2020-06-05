const express = require('express');
const router = express.Router();

const db = require('../models');


// Index route - the app's Dashboard
router.get('/', (req,res) => {
    // retrieves the user's list of inventories and display on Dashboard
    db.List.find({user: req.session.currentUser.id}, function(err, allLists) {
        if (err) {
            console.log(err);
            res.redirect('/500');
        } else {  
            // compares the quantity & reorder level and displays it in the aside nav 'Order List' section
            db.Item.find({$expr : {$lt : ['$quantity', '$reorderLevel'] }}, function(err, comparedItem){
                if (err) {
                    console.log(err);
                    res.redirect('/500');
                } else {
                    // find session ID for user and display the username information on the 'Welcome Back' section
                    db.User.findById(req.session.currentUser.id)
                    .populate('user')
                    .exec(function(err, foundUser){
                        if (err) {
                            console.log(err);
                            res.send({message: 'cant find user'});
                        } else {
                            res.render('lists/index', {"lists": allLists, "items": comparedItem, "users": foundUser});
                        }
                    })                    
                }
            });           
        }
    });
});


// Create new list route
router.get('/new', (req,res) =>{
    res.render('lists/new');
})

// Create route - post new item data to the db collection
router.post('/', (req,res) => {
    const list = {
        name: req.body.name,
        user: req.session.currentUser.id,
    };
    db.List.create(list, function(err,createdList) {
        if (err) {
            console.log(err);
            res.redirect('/500');
        } else {
            res.redirect(`/lists/${createdList._id}`);
        }
    });
});


// Show route
router.get('/:id', (req,res) => {
    db.List.findById(req.params.id, function(err, foundList) {
        if (err) {
            console.log(err);
            res.redirect('/500');
        } else {
            foundList.populate('items user').execPopulate(function() {
                const context = {list: foundList};
                res.render('lists/show', context);
            })     
        }
    })
})


// Edit route
router.get('/:id/edit', (req,res) => {
    db.List.findById(req.params.id, function(err, foundList) {
        if (err) {
            console.log(err);
            res.redirect('/500');
        } else {
            const context = {list: foundList};
            res.render('lists/edit', context);
        }
    })
})


// Update route
router.put('/:id', (req,res) => {
    const listsData = {
        $set:{
          name: req.body.name,
        }
    }
    db.List.findByIdAndUpdate(req.params.id,req.body,{new:true}, function(err, updatedList) {
        if (err) {
            console.log(err);
            res.redirect('/500');
        } else {
            res.redirect(`/lists/${updatedList._id}`);
        }
    })
})


// Delete route
router.delete("/:id", async (req,res) => {
    try {
        const deletedList = await db.List.findByIdAndDelete(req.params.id);
        res.redirect("/lists");
    } catch (err) {
        console.log(err);
        res.redirect('/500');
    }
})


// Export router
module.exports = router;