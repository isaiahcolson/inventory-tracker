const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

const db = require("../models");

router.get('/signup', (req,res) => {
    res.render('auth/signup');
});

module.exports = router;