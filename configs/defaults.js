'use strict';

module.exports = {
  twitter: {
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token: process.env.TWITTER_ACCESS_TOKEN,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
    timout_ms: 60 * 1000
  },
  server: {
    port: process.env.PORT || 3000
  },
  api: {
    host: 'https://test-twitter-dashboard.herokuapp.com' // or http://localhost:3000 in .localrc
  }
};
