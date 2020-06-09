const mongoose = require('mongoose');
<<<<<<< HEAD
require("dotenv").config();

const connectionString = 
  process.env.MONGODB_URI;

=======
// using .envfile
require("dotenv").config();

const conenctionString = process.env.MONGODB_URI;
>>>>>>> 44064a0f60ed5a5dd71754844eb62453fb224415
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
