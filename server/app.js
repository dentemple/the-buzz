const express = require('express');
const mongoose = require('mongoose');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

// Configure Database
mongoose.set('debug', true);
mongoose.Promise = global.Promise;
mongoose.connect(
  'mongodb://localhost/thebuzz',
  {
    keepAlive: true,
    reconnectTries: Number.MAX_VALUE,
    useNewUrlParser: true
  }
);

// Configure Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// Configure routes
app.use('/auth', require('./auth/routes'));
app.use('/api', require('./api/routes'));

module.exports = app;
