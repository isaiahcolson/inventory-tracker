// External module
const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const expressLayouts = require('express-ejs-layouts');

// Internal Module
const controllers = require('./controllers');

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

// Root route
app.get('/', (req,res) =>{
    res.render('index');
});

// Lists route
app.use('/lists', controllers.list);
app.use('/items', controllers.item);

// Bind server to PORT
app.listen(PORT, function(){
    console.log(`Server is live on http://localhost:${PORT}`);
});
