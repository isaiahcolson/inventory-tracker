const express = require('express');
const router = express.Router();

const db = require('../models');

// Show route
router.get('/', (req,res) => {
    db.Item.findById(req.params.id, function(err, allItems) {
        if (err) {
            console.log(err);
            res.send({message: 'Internal server error.'});
        } else {
            const context = {items: allItems};
            res.render('items/show', context);
        }
    });
});



module.exports = router;