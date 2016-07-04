'use strict';

// Export a function named getName that takes two arguments.
//    getJSON (function)
//    url (string)
//
// Invoke the getJSON function with the provided URL to send an HTTP GET request
// and return a pending promise. The promise will either be fulfilled with an
// object containing information about a Pokemon or be rejected with an error.
//
// Chain a fulfilled handler onto the above promise that takes one argument.
//    pokemon (object)
// Return the name of the provided pokemon.
//
// Chain a rejected handler onto the above promise that takes one argument.
//    err (object)
// Return the provided error.
//
// Return the final promise from the chain.
module.exports.getName = function(getJSON, url) {
  return getJSON(url).then((pokemon) => pokemon.name).catch((err) => err);
};

// Export a function named getId that takes two arguments.
//    getJSON (function)
//    url (string)
//
// Invoke the getJSON function with the provided URL to send an HTTP GET request
// and return a pending promise. The promise will either be fulfilled with an
// object containing information about a Pokemon or be rejected with an error.
//
// Chain a fulfilled handler onto the above promise that takes one argument.
//    pokemon (object)
// Return the id of the provided pokemon.
//
// Chain a rejected handler onto the above promise that takes one argument.
//    err (object)
// Return the provided error.
//
// Return the final promise from the chain.
module.exports.getId = function(getJSON, url) {
  return getJSON(url).then((pokemon) => pokemon.id).catch((err) => err);
};

// Export a function named getBaseExperience that takes two arguments.
//    getJSON (function)
//    url (string)
//
// Invoke the getJSON function with the provided URL to send an HTTP GET request
// and return a pending promise. The promise will either be fulfilled with an
// object containing information about a Pokemon or be rejected with an error.
//
// Chain a fulfilled handler onto the above promise that takes one argument.
//    pokemon (object)
// Return the base experience of the provided pokemon.
//
// Chain a rejected handler onto the above promise that takes one argument.
//    err (object)
// Return the provided error.
//
// Return the final promise from the chain.
module.exports.getBaseExperience = function(getJSON, url) {
  return getJSON(url)
    .then((pokemon) => pokemon.base_experience)
    .catch((err) => err);
};

// Export a function named getHeightAndWeight that takes two arguments.
//    getJSON (function)
//    url (string)
//
// Invoke the getJSON function with the provided URL to send an HTTP GET request
// and return a pending promise. The promise will either be fulfilled with an
// object containing information about a Pokemon or be rejected with an error.
//
// Chain a fulfilled handler onto the above promise that takes one argument.
//    pokemon (object)
// Return the height and weight of the provided pokemon as a two-element array.
//
// Chain a rejected handler onto the above promise that takes one argument.
//    err (object)
// Return the provided error.
//
// Return the final promise from the chain.
module.exports.getHeightAndWeight = function(getJSON, url) {
  return getJSON(url)
    .then((pokemon) => [pokemon.height, pokemon.weight])
    .catch((err) => err);
};

// Export a function named getForms that takes two arguments.
//    getJSON (function)
//    url (string)
//
// Invoke the getJSON function with the provided URL to send an HTTP GET request
// and return a pending promise. The promise will either be fulfilled with an
// object containing information about a Pokemon or be rejected with an error.
//
// Chain a fulfilled handler onto the above promise that takes one argument.
//    pokemon (object)
// Return the forms of the provided pokemon.
//
// Chain a rejected handler onto the above promise that takes one argument.
//    err (object)
// Return the provided error.
//
// Return the final promise from the chain.
module.exports.getForms = function(getJSON, url) {
  return getJSON(url).then((pokemon) => pokemon.forms).catch((err) => err);
};

// Export a function named getFormsCount that takes two arguments.
//    getJSON (function)
//    url (string)
//
// Invoke the getJSON function with the provided URL to send an HTTP GET request
// and return a pending promise. The promise will either be fulfilled with an
// object containing information about a Pokemon or be rejected with an error.
//
// Chain a fulfilled handler onto the above promise that takes one argument.
//    pokemon (object)
// Return the number of forms of the provided pokemon.
//
// Chain a rejected handler onto the above promise that takes one argument.
//    err (object)
// Return the provided error.
//
// Return the final promise from the chain.
module.exports.getFormsCount = function(getJSON, url) {
  return getJSON(url)
    .then((pokemon) => pokemon.forms.length)
    .catch((err) => err);
};

// Export a function named getFirstForm that takes two arguments.
//    getJSON (function)
//    url (string)
//
// Invoke the getJSON function with the provided URL to send an HTTP GET request
// and return a pending promise. The promise will either be fulfilled with an
// object containing information about a Pokemon or be rejected with an error.
//
// Chain a fulfilled handler onto the above promise that takes one argument.
//    pokemon (object)
// Return the first form of the provided pokemon.
//
// Chain a rejected handler onto the above promise that takes one argument.
//    err (object)
// Return the provided error.
//
// Return the final promise from the chain.
module.exports.getFirstForm = function(getJSON, url) {
  return getJSON(url).then((pokemon) => pokemon.forms[0]).catch((err) => err);
};

// Export a function named getFirstFormName that takes two arguments.
//    getJSON (function)
//    url (string)
//
// Invoke the getJSON function with the provided URL to send an HTTP GET request
// and return a pending promise. The promise will either be fulfilled with an
// object containing information about a Pokemon or be rejected with an error.
//
// Chain a fulfilled handler onto the above promise that takes one argument.
//    pokemon (object)
// Return the name of the first form of the provided pokemon.
//
// Chain a rejected handler onto the above promise that takes one argument.
//    err (object)
// Return the provided error.
//
// Return the final promise from the chain.
module.exports.getFirstFormName = function(getJSON, url) {
  return getJSON(url)
    .then((pokemon) => pokemon.forms[0].name)
    .catch((err) => err);
};

// Export a function named getFirstFormUrl that takes two arguments.
//    getJSON (function)
//    url (string)
//
// Invoke the getJSON function with the provided URL to send an HTTP GET request
// and return a pending promise. The promise will either be fulfilled with an
// object containing information about a Pokemon or be rejected with an error.
//
// Chain a fulfilled handler onto the above promise that takes one argument.
//    pokemon (object)
// Return the url of the first form of the provided pokemon.
//
// Chain a rejected handler onto the above promise that takes one argument.
//    err (object)
// Return the provided error.
//
// Return the final promise from the chain.
module.exports.getFirstFormUrl = function(getJSON, url) {
  return getJSON(url)
    .then((pokemon) => pokemon.forms[0].url)
    .catch((err) => err);
};
