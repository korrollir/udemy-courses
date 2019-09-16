var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var campgrounds = [
  {name: 'Salmon Creek', image: 'https://images.unsplash.com/photo-1445308394109-4ec2920981b1?dpr=1.25&auto=compress,format&fit=crop&w=767&h=510&q=80&cs=tinysrgb&crop='},
  {name: 'Belzer', image: 'https://images.unsplash.com/photo-1487730116645-74489c95b41b?dpr=1.25&auto=compress,format&fit=crop&w=767&h=511&q=80&cs=tinysrgb&crop='},
  {name: 'Stinkyface Retreat', image: 'https://images.unsplash.com/photo-1414016642750-7fdd78dc33d9?dpr=1.25&auto=compress,format&fit=crop&w=767&h=512&q=80&cs=tinysrgb&crop='}
];

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.render('landing');
});

app.get('/campgrounds', function(req, res){
  res.render('campgrounds', {campgrounds: campgrounds});
});

app.post('/campgrounds', function(req, res){
  var name = req.body.name;
  var image = req.body.image;
  var newCampground = {name: name, image: image};
  campgrounds.push(newCampground);

  res.redirect('/campgrounds');
});

app.get('/campgrounds/new', function(req, res){
  res.render('new');
});

app.listen(3000, process.env.IP, function() {
  console.log('Server has started.');
});
