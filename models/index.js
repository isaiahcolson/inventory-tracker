const mongoose = require('mongoose');
<<<<<<< HEAD
require("dotenv").config();

const connectionString = 
  process.env.MONGODB_URI;

=======
// using .envfile
require("dotenv").config();

<<<<<<< HEAD
const conenctionString = process.env.MONGODB_URI;
>>>>>>> 44064a0f60ed5a5dd71754844eb62453fb224415
=======
const connectionString = process.env.MONGODB_URI;
>>>>>>> f3afaf86f8d6775362ae67afdcb1000997569054
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
