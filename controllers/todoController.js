// require('dotenv').config()
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// const jwt = require('jsonwebtoken')

try{
    mongoose.connect('mongodb+srv://amit:newmongodb@cluster0.rlu3ans.mongodb.net/testDb?retryWrites=true&w=majority');
    console.log("Database Connected !");
}catch(error){
 console.log(error);
};

var todoSchema = new mongoose.Schema({
    item: String
});

// console.log(todoSchema);

var Todo = mongoose.model('testcollections',todoSchema);

// var data = [{item: 'get milk'}, {item:'walk dog'}, {item:'do code'}, {item:'some item'}];
var urlencodedParser = bodyParser.urlencoded({extended: false});

// function authenticateToken(req, res, next) {
//     const authHeader = req.headers['authorization']
//     const token = authHeader && authHeader.split(' ')[1]
//     console.log(token)
//     if (token == null) return res.sendStatus(401)
  
//     jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
//       console.log(err)
//       if (err) return res.sendStatus(403)
//       req.user = user
//       next()
//     })
// }

module.exports = function(app){

// api endpoint
/*
app.get('/todo',authenticateToken, function(req, res){
    if(req.user.name === 'Admin'){
        Todo.find({}).then((element) =>{
            // res.render('todo', {todos: element});
            res.json(element);
        });
    }else{
        Todo.find({username:req.user.name}).then((element) =>{
            // res.render('todo', {todos: element});
            res.json(element);
        });
    } 
});
*/

//api endpoint
/*
app.post('/todo',authenticateToken, function(req, res){
    console.log(req.body)
    Todo(req.body).save().then(function(){
            console.log("Successfully inserted one docs into collection");
        }).catch(function (err) {
            console.log(err);
        });
    Todo.find({}).then((data) =>{
        res.json(data);
        res.end();
    });
    // data.push(JSON.parse(JSON.stringify(req.body)));
    // console.log(data);
    // res.json(data);
    // res.end();
});
*/

//api endpoint
/*
app.delete('/todo/:item', function(req, res){
    console.log(req.params.item);
    Todo.deleteOne({item: req.params.item.replace(/\-/g," ")}).then(function(){
        console.log("one document deleted"); // Success
     }).catch(function(error){
        console.log(error); // Failure
     });
    // data = data.filter(function (todo){
    //     return todo.item.replace(/ /g,'-') !== req.params.item;
    // });
    Todo.find({}).then((data) =>{
        res.json(data);
        res.end();
    });
    // res.json(data);
    // res.end();
});
*/

app.get('/ui/todo',function(req, res){
    Todo.find({}).then((element) =>{
            res.render('todo', {todos: element});
        });
});


app.post('/ui/todo',urlencodedParser,function(req, res){
    Todo(req.body).save().then(function(){
            console.log("Successfully inserted one docs into collection");
        }).catch(function (err) {
            console.log(err);
        });
    Todo.find({}).then((data) =>{
        res.json(data);
        res.end();
    });
    // data.push(JSON.parse(JSON.stringify(req.body)));
    // console.log(data);
    // res.json(data);
    // res.end();
});

app.delete('/ui/todo/:item', function(req, res){
    console.log(req.params.item);
    Todo.deleteOne({item: req.params.item.replace(/\-/g," ")}).then(function(){
        console.log("one document deleted"); // Success
     }).catch(function(error){
        console.log(error); // Failure
     });
    // data = data.filter(function (todo){
    //     return todo.item.replace(/ /g,'-') !== req.params.item;
    // });
    Todo.find({}).then((data) =>{
        res.json(data);
        res.end();
    });
    // res.json(data);
    // res.end();
});

};