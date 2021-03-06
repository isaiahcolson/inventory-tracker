const mongoose = require('mongoose');

require("dotenv").config();

const connectionString = 
  process.env.MONGODB_URI;

// using .envfile
require("dotenv").config();

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/inventory';
mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(function () {
    console.log("Mongodb connection successful.");
  })
  .catch(function (err) {
    console.log("Mongodb connection error", err);
  });

module.exports = {
    List: require('./List'),
    Item: require('./Item'),
    User: require('./User'),
};
