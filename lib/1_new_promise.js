'use strict';

// Hint, hint...
const fs = require('fs');
const request = require('request');

// Export a function named readJSON that takes one argument.
//    filePath (path)
//
// Return a promise that reads the JSON content of the specified filePath.
//
// If the request results in an error, reject the promise with the error.
// Otherwise, resolve the promise by parsing the content as JSON.
module.exports.readJSON = function(filePath) {
  const promise = new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, content) => {
      if (err) {
        return reject(err);
      }

      resolve(JSON.parse(content));
    });
  });

  return promise;
};

// Export a function named writeJSON that takes two arguments.
//    filePath (path)
//    content (string)
//
// Return a promise that writes the JSON content to the specified filePath.
//
// If the request results in an error, reject the promise with the error.
// Otherwise, resolve the promise by parsing the content as JSON.
module.exports.writeJSON = function(filePath, content) {
  const promise = new Promise((resolve, reject) => {
    fs.writeFile(filePath, content, (err) => {
      if (err) {
        return reject(err);
      }

      resolve(JSON.parse(content));
    });
  });

  return promise;
};

// Export a function named getJSON that takes one argument.
//    url (string)
//
// Return a promise that sends an HTTP GET request to the specified URL.
//
// If the request results in an error, reject the promise with the error.
// Otherwise, resolve the promise by parsing the HTTP response body as JSON.
module.exports.getJSON = function(url) {
  const promise = new Promise((resolve, reject) => {
    request.get(url, (err, res, body) => {
      if (err) {
        return reject(err);
      }

      resolve(JSON.parse(body));
    });
  });

  return promise;
};

// Export a function named postJSON that takes two arguments.
//    url (string)
//    body (string)
//
// Return a promise that sends an HTTP POST request with a JSON body to the
// specified URL.
//
// If the request results in an error, reject the promise with the error.
// Otherwise, resolve the promise by parsing the HTTP response body as JSON.
module.exports.postJSON = function(url, body) {
  const promise = new Promise((resolve, reject) => {
    request.post({ url, body }, (err, res, resBody) => {
      if (err) {
        return reject(err);
      }

      resolve(JSON.parse(resBody));
    });
  });

  return promise;
};
