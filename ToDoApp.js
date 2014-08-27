/**
 * @author himani.bhardwaj
 */
var express =require('express');

var routes = require('./Routes/todo');

var mongo =require("mongodb");
var monk=require("monk");
var dataBase=monk("localhost:27017/API/todoApp");

var app = express();
app.use(express.static(__dirname + '/Assests'));
var Todo;

app.use(function(req,res,next){
    req.Todo = dataBase;
    next();
});

app.listen(8080);
console.log("App listening on port 8080");
/*app.get('/API/todoApp', function(req, res) {

    // use mongoose to get all todos in the database
    //Todo.find(function(err, todos) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err)
            res.send(err)

        res.json(todos); // return all todos in JSON format
    });
});

app.post('/API/todoApp', function(req, res) {

    res.header("Access-Control-Allow-Origin", "http://localhost");
    res.header("Access-Control-Allow-Methods", "GET, POST");

   // Todo.create({
        text : req.body.text,
        done : false
    }, function(err, todo) {
        console.log("working post services.")
        if (err)
            res.send(err);

        // get and return all the todos after you create another
       // Todo.find(function(err, todos) {
            if (err){
                res.send(err);
            }
            res.json(todos);
        });
    });

});*/