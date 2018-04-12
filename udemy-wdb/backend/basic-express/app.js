var express = require('express');
var app = express();

//============
//Routes
//============

app.get('/', function(req, res){
    res.send('Hello.  Welcome to my assignment.');
});

app.get('/speak/:animal', function(req, res){
   var animal = req.params.animal;
   var sounds = {
     pig: 'Oink',
     cow: 'Moo',
     dog: 'Woof! Woof!'
   }

   res.send('The ' + animal + ' says ' + sounds[animal]);
});

app.get('/repeat/:word/:number', function(req, res){
    var num = parseInt(req.params.number);
    var word = req.params.word;
    var phrase = '';

    for (var i = 0; i < num; i++){
       phrase += word + ' ';
    }
    res.send(phrase);
});

app.get('*', function(req, res){
    res.send('Sorry, page not found.....What are you doing with your life?');
});

app.listen(3000, process.env.IP, function(){
    console.log('Server has started.');
});
