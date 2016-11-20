'use strict';

if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = 'development';
}

const path = require('path');

const express = require('express');
const Twit = require('twit');
const config = require('./config');

const app = express();
const twitter = new Twit(config('twitter'));

app.use(express.static(path.join(__dirname, 'client')));

app.get('/search', function (req, res) {
  twitter.get('search/tweets', req.query, function (err, data, response) {
    res.json(data);
  });
});

app.listen(config('server.port'), (err) => {
  if (err) {
    console.error(err);
  }
  console.log('Server started');
});
