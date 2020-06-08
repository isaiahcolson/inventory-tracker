// External module
const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const expressLayouts = require('express-ejs-layouts');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

// using .env
require("dotenv").config();

// Internal Module
const controllers = require('./controllers');
const authRequired = require("./middleware/authRequired");

// Instance module
const app = express();

// System config variable
const PORT = process.env.PORT;

// App configuration
app.set('view engine', 'ejs');

// Middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/public'));  //for public and styles folder access
app.use(expressLayouts);
// app.use(require('express-ejs-layouts')); // so you dont have to label it twice


// Cookie Session configuration
app.use(session({
    store: new MongoStore({
        url: process.env.MONGODB_URI,
    }),
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7 * 2, // session will last for 2 wks
    },
}));

// Root route
app.get('/', (req,res) =>{
    console.log(req.session);
    res.render('index', {user: req.session.currenUser });
});

// Auth route
app.use("/", controllers.auth);

// Lists route
app.use('/lists', authRequired, controllers.list);
app.use('/items', authRequired, controllers.item);

// Error route
app.get('/500', (req,res) =>{
    // console.log(req.session);
    res.render('500', {user: req.session.currenUser });
});

app.get('/404', (req,res) =>{
    // console.log(req.session);
    res.render('404', {user: req.session.currentUser });
});

/* app.use(function (req, res, next) {
    res.status(500).render('500');
}); */



app.get("/*",function (req, res, next) {
    res.status(404).render('404');
}); // great way to catch all pages that do not exist

// method not allowed
app.use("/*", function (req, res, next) {
    // res.status(405).json({ message: "Method not allowed" });
    res.sendStatus(405);
});

// Bind server to PORT
app.listen(PORT, function(){
    console.log(`Server is live on http://localhost:${PORT}`);
});
