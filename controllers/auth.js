const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

const db = require("../models");

router.get('/signup', (req,res) => {
    res.render('auth/signup');
});

router.post('/signup', async (req,res) => {
    const foundUser = await db.User.findOne({ email: req.body.email});
    console.log(foundUser);
    res.redirect("/");
});

module.exports = router;