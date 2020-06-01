const express = require('express');
const router = express.Router();

const db = require('../models');

router.get('/', (req,res) => {
    res.send('items/index');
});

module.exports = router;