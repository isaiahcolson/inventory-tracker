const express = require('express');
const router = express.Router();

const db = require('../models');


// Index route
router.get('/', (req,res) => {
    db.List.find({user: req.session.currentUser.id}, function(err, allLists) {
        if (err) {
            console.log(err);
            res.send({message: 'Internal server error.'});
        } else {
            db.Item.find({$expr : {$lt : ['$quantity', '$reorderLevel'] }}, function(err, comparedItem){
                if (err) {
                    console.log(err);
                    res.send({message: 'compared item error'});
                } else {
                    db.User.find({user: req.session.currentUser.id}, function(err, foundUser){
                        if (err) {
                            console.log(err);
                            res.send({message: 'cant find user'});
                        } else {
                            console.log("index route log");
                            console.log({comparedItem});
                            console.log({foundUser});
                            // const context = {lists: allLists};
                            // const context2 = {items: comparedItem};
                            res.render('lists/index', {"lists": allLists, "items": comparedItem, "users": foundUser});
                        }
                    })                    
                }
            });           
        }
    });
});




// router.get('/index', (req,res) => {
//     db.Item.find({ }, function(err, allItems){
//         if (err) {
//             console.log(err);
//             res.send({message: 'compared item error'});
//         } else {
//             const filterItems = allItems.filter(function(item){
//                 return item.quantity < item.reorderLevel 
//             })
//             // res.json({filterItems});
//             console.log({filterItems});
//         }
//     });
// })



// Create new list route
router.get('/new', (req,res) =>{
    res.render('lists/new');
})

// Create route
router.post('/', (req,res) => {
    const list = {
        name: req.body.name,
        user: req.session.currentUser.id,
    };
    db.List.create(list, function(err,createdList) {
        if (err) {
            console.log(err);
            res.send({message: 'Internal server error.'});
        } else {
            console.log(createdList);
            res.redirect(`/lists/${createdList._id}`);
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
            foundList.populate('items user').execPopulate(function() {
                const context = {list: foundList};
                res.render('lists/show', context);
                console.log(foundList);
                console.log('show route log');
            })     
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
    const listsData = {
        $set:{
          name: req.body.name,
        }
    }
    db.List.findByIdAndUpdate(req.params.id,req.body,{new:true}, function(err, updatedList) {
        if (err) {
            console.log(err);
            res.send({message: 'Internal server error.'});
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
        res.send({ message: "Internal Server Error"});
    }
})



// export router
module.exports = router;