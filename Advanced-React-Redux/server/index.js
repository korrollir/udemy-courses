/* 
  ****************
      Packages 
  ****************
*/
const express = require('express');
// Native node library to work with incoming http requests
const http = require('http');
const bodyParser = require('body-parser');
// Morgan is a middleware logging framework
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');
const cors = require('cors');

/*
  ****************
      DB Setup
  ****************
*/
// Creates a new database in Mongo called auth
mongoose.connect('mongodb://localhost:27017/auth');

/* 
  ****************
     App Setup 
  ****************
*/
app.use(morgan('combined'));
app.use(cors());
// Tell body-parser to attempt to parse any incoming request as json
app.use(bodyParser.json({ type: '*/*' }));
// Access for routes
router(app);

/* 
  ****************
    Server Setup 
  ****************
*/
const port = process.env.PORT || 3090;
// Create server and forward to app
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on: ', port);