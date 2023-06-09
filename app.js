var express = require('express');
var todoController = require('./controllers/todoController');

var app = express();

// set up template engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'),express.json());

// fire controller
todoController(app);


app.listen(3000);
console.log('you are listing to port 3000');