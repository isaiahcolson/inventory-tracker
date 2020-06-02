// External module
const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const expressLayouts = require('express-ejs-layouts');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

// Internal Module
const controllers = require('./controllers');
const authRequired = require("./middleware/authRequired");

// Instance module
const app = express();

// System config variable
const PORT = process.env.PORT || 4000;

// App configuration
app.set('view engine', 'ejs');

// Middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(methodOverride('_method'));
app.use(express.static('public'));  //for public and styles folder access
app.use(expressLayouts);

// Cookie Session configuration
app.use(session({
    store: new MongoStore({
        url: 'mongodb://localhost:27017/inventory',
    }),
    secret: 'Say friend and enter',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7 * 2, // session will last for 2 wks
    },
}));

// Root route
app.get('/', (req,res) =>{
    res.render('index');
});

// Lists route
app.use('/lists', controllers.list);
app.use('/items', controllers.item);

// Auth route
app.use("/", controllers.auth);

// Bind server to PORT
app.listen(PORT, function(){
    console.log(`Server is live on http://localhost:${PORT}`);
});
