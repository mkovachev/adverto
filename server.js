const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// init express
const app = express();

// init body parser
app.use(bodyParser.json());

// set static folders
app.use(express.static('public'));
app.use(express.static('node_modules'));

//routes
const home = require('./routes/home-router');
const main = require('./routes/main-router');
app.get('/', home.get);
app.get('/main', main.get);



// start server
const port = 3000;
app.set('port', (process.env.PORT || 3000));
app.listen(port, function () {
    console.log('server is running on port ' + app.get('port'));
});