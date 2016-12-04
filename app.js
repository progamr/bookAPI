var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

var db = mongoose.connect('mongodb://localhost/bookAPI');
var Book = require('./models/bookModel');
var app = express();

var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
var bookRouter = require('./routes/bookRoutes')();
app.use('/api/books', bookRouter);

app.get('/', function(req, res) {
    res.send("Hello Nodejs");
});

app.listen(port, function() {
    console.log('running on port ' + port);
});