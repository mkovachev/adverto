const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// init express
const app = express();

// set static folders
app.use(express.static('public'));
app.use(express.static('node_modules'));

//routes
const home = require('./routes/home-router');
app.use('/', home);

// start server
app.set('port', (process.env.PORT || 3000));
app.listen(port, function () {
    console.log('server is running on port ' + app.get('port'));
})