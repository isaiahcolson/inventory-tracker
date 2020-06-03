const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

const db = require("../models");

// Signup form
router.get('/signup', (req,res) => {
    res.render('auth/signup');
});


// Signup route
router.post('/signup', async (req,res) => {
    try {
        const foundUser = await db.User.findOne({ email: req.body.email});
        // access the req.body
        // search the database for user's existing email
        if (foundUser){
            return res.send({message:"Account is already signed up"});
        }
        // if not found, then proceed to hash the password
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(req.body.password, salt);
        req.body.password = hash;
        // create username object with req.body and hash their password
        const newUser = await db.User.create(req.body);
        // redirect user to login page
        res.redirect('/login');
    }   catch (err) {
        res.send({message: 'Internal Server Error', error: err});
    }
});

// Login route

router.get('/login', (req,res) => {
    res.render('auth/login');
});


module.exports = router;