'use strict;';
const request = require('request');

/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
const fetchMyIP = (callback) => {
  // use request to fetch IP address from JSON API

  const url = 'https://api.ipify.org?format=json';

  request(url, (error, resp, body) => {

    if (error) return callback(error,null);

    if (resp.statusCode !== 200) {
      callback(Error(`Status Code ${resp.statusCode} when fetching IP. Response: ${body}`), null);
      return;
    }

    callback(null,JSON.parse(body).ip);

  });
};

module.exports = { fetchMyIP };