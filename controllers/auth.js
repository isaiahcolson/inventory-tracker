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

// Login form
router.get('/login', (req,res) => {
    res.render('auth/login');
});


// Login post
router.post('/login', async (req,res) => {
    try {
        // verify email existence
        const foundUser = await db.User.findOne({ username: req.body.username });
        // error message displayed if email doesn't exist
        if(!foundUser) {
            return res.send({ message: "Email is not found"});
        }
        // let's now compare given password with hashed version
        const match = await bcrypt.compare(req.body.password, foundUser.password);
        // if no match, display error message
        if (!match) {
            return res.send({ message: "Password hash not matching"});
        }
        // if psw match, create session for authentication
        req.session.currentUser = {
            id: foundUser._id,
            username: foundUser.username,
        };
        // redirect user to our landing page
        res.redirect('/lists');
    } catch (err) {
        res.send({ message: "Internal Server Error", error: err});
    }
});

// Logout route 
router.delete('/logout', async (req,res) => {
    await req.session.destroy();
    res.redirect('/login');
});

// Profile
// TODO - Need to reference user to list 
router.get('/profile', async (req,res) => {
    try {
        const foundUser = await db.User.findById(req.session.currenUser.id);
        const userLists = await db.List.find({
            user: req.session.currentUser.id,
        });
        console.log(foundUser);
        console.log(userLists);
        res.render('auth/profile', { user: foundUser, lists: userLists });
    } catch (err) {
        res.send({message: 'Internal Server Error', error: err});
    }
});


module.exports = router;