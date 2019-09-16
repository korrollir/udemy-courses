var express     = require('express'),
    mongoose    = require('mongoose'),
    bodyParser  = require('body-parser'),
    app         = express();

// App config
mongoose.connect("mongodb://localhost/blog_app", {useMongoClient: true});
mongoose.Promise = global.Promise;
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

// Mongoose/Model config
var blogSchema = new mongoose.Schema({
  title: String,
  image: String,
  body: String,
  created: {type: Date, default: Date.now}
});

var Blog = mongoose.model('Blog', blogSchema);

//RESTful Routes
app.get('/', function(req, res){
  res.redirect('/blogs');
});

    // Index Route
app.get('/blogs', function(req, res){
  Blog.find({}, function(err, blogs) {
    if(err) {
      console.log('Error');
    } else {
      // Render index route with data from DB
      res.render('index', {blogs: blogs});
    }
  });
});

  //Create route
app.post('/blogs', function(req, res){
  Blog.create(req.body.blog, function(err, newBlog){
    if(err){
      res.render('new');
    } else {
      res.redirect('/blogs');
    }
  });
});

app.get('/blogs/new', function(req, res){
  res.render('new');
});

  //Show route
app.get('/blogs/:id', function(req, res){
  Blog.findById(req.params.id, function(err, foundBlog){
    if(err){
      res.redirect('/blogs');
    } else {
      res.render('show', {blog: foundBlog});
    }
  });
});


app.listen(3000, process.env.IP, function() {
  console.log('Server started');
});
