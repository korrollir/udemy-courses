/* 
  ****************
      Packages 
  ****************
*/
const express = require('express');
// Native node library to work with incoming http requests
const http = require('http');
const bodyParse = require('body-parser');
// Morgan is a middleware logging framework
const morgan = require('morgan');
const app = express();
const router = requrie('./router');

/* 
  ****************
     App Setup 
  ****************
*/

app.use(morgan('combined'));
// Tell body-parser to attempt to parsed any incoming request as json
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
const server = https.createServer(app);
server.listen(port);
console.log('Server listening on: ', port);