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
// Return the promise from invoking the getJSON function with the URL of the
// first form of the provided pokemon.
//
// Chain a fulfilled handler onto the above promise that takes one argument.
//    form (object)
// Return the name of the provided form.
//
// Chain a rejected handler onto the above promise that takes one argument.
//    err (object)
// Return the provided error.
//
// Return the final promise from the chain.
module.exports.getName = function(getJSON, url) {
  return getJSON(url)
    .then((pokemon) => getJSON(pokemon.forms[0].url))
    .then((form) => form.name)
    .catch((err) => err);
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
// Return the promise from invoking the getJSON function with the URL of the
// first form of the provided pokemon.
//
// Chain a fulfilled handler onto the above promise that takes one argument.
//    form (object)
// Return the id of the provided form.
//
// Chain a rejected handler onto the above promise that takes one argument.
//    err (object)
// Return the provided error.
//
// Return the final promise from the chain.
module.exports.getId = function(getJSON, url) {
  return getJSON(url)
    .then((pokemon) => getJSON(pokemon.forms[0].url))
    .then((form) => form.id)
    .catch((err) => err);
};

// Export a function named getIsBattleOnlyOrMega that takes two arguments.
//    getJSON (function)
//    url (string)
//
// Invoke the getJSON function with the provided URL to send an HTTP GET request
// and return a pending promise. The promise will either be fulfilled with an
// object containing information about a Pokemon or be rejected with an error.
//
// Chain a fulfilled handler onto the above promise that takes one argument.
//    pokemon (object)
// Return the promise from invoking the getJSON function with the URL of the
// first form of the provided pokemon.
//
// Chain a fulfilled handler onto the above promise that takes one argument.
//    form (object)
// Return whether or not the provided form is a battle form or a mega form.
//
// Chain a rejected handler onto the above promise that takes one argument.
//    err (object)
// Return the provided error.
//
// Return the final promise from the chain.
module.exports.getIsBattleOnlyOrMega = function(getJSON, url) {
  return getJSON(url)
    .then((pokemon) => getJSON(pokemon.forms[0].url))
    .then((form) => form.is_battle_only || form.is_mega)
    .catch((err) => err);
};

// Export a function named getSprites that takes two arguments.
//    getJSON (function)
//    url (string)
//
// Invoke the getJSON function with the provided URL to send an HTTP GET request
// and return a pending promise. The promise will either be fulfilled with an
// object containing information about a Pokemon or be rejected with an error.
//
// Chain a fulfilled handler onto the above promise that takes one argument.
//    pokemon (object)
// Return the promise from invoking the getJSON function with the URL of the
// first form of the provided pokemon.
//
// Chain a fulfilled handler onto the above promise that takes one argument.
//    form (object)
// Return the sprites of the provided form.
//
// Chain a rejected handler onto the above promise that takes one argument.
//    err (object)
// Return the provided error.
//
// Return the final promise from the chain.
module.exports.getSprites = function(getJSON, url) {
  return getJSON(url)
    .then((pokemon) => getJSON(pokemon.forms[0].url))
    .then((form) => form.sprites)
    .catch((err) => err);
};

// Export a function named getSpriteKeys that takes two arguments.
//    getJSON (function)
//    url (string)
//
// Invoke the getJSON function with the provided URL to send an HTTP GET request
// and return a pending promise. The promise will either be fulfilled with an
// object containing information about a Pokemon or be rejected with an error.
//
// Chain a fulfilled handler onto the above promise that takes one argument.
//    pokemon (object)
// Return the promise from invoking the getJSON function with the URL of the
// first form of the provided pokemon.
//
// Chain a fulfilled handler onto the above promise that takes one argument.
//    form (object)
// Return the keys of the sprites of the provided form.
//
// Chain a rejected handler onto the above promise that takes one argument.
//    err (object)
// Return the provided error.
//
// Return the final promise from the chain.
module.exports.getSpriteKeys = function(getJSON, url) {
  return getJSON(url)
    .then((pokemon) => getJSON(pokemon.forms[0].url))
    .then((form) => Object.keys(form.sprites))
    .catch((err) => err);
};

// Export a function named getSpriteValues that takes two arguments.
//    getJSON (function)
//    url (string)
//
// Invoke the getJSON function with the provided URL to send an HTTP GET request
// and return a pending promise. The promise will either be fulfilled with an
// object containing information about a Pokemon or be rejected with an error.
//
// Chain a fulfilled handler onto the above promise that takes one argument.
//    pokemon (object)
// Return the promise from invoking the getJSON function with the URL of the
// first form of the provided pokemon.
//
// Chain a fulfilled handler onto the above promise that takes one argument.
//    form (object)
// Return the values of the sprites of the provided form.
//
// Chain a rejected handler onto the above promise that takes one argument.
//    err (object)
// Return the provided error.
//
// Return the final promise from the chain.
module.exports.getSpriteValues = function(getJSON, url) {
  return getJSON(url)
    .then((pokemon) => getJSON(pokemon.forms[0].url))
    .then((form) => {
      const values = [];

      for (const key in form.sprites) {
        values.push(form.sprites[key]);
      }

      return values;
    })
    .catch((err) => err);
};

// Export a function named getVersionGroup that takes two arguments.
//    getJSON (function)
//    url (string)
//
// Invoke the getJSON function with the provided URL to send an HTTP GET request
// and return a pending promise. The promise will either be fulfilled with an
// object containing information about a Pokemon or be rejected with an error.
//
// Chain a fulfilled handler onto the above promise that takes one argument.
//    pokemon (object)
// Return the promise from invoking the getJSON function with the URL of the
// first form of the provided pokemon.
//
// Chain a fulfilled handler onto the above promise that takes one argument.
//    form (object)
// Return the version group of the provided form.
//
// Chain a rejected handler onto the above promise that takes one argument.
//    err (object)
// Return the provided error.
//
// Return the final promise from the chain.
module.exports.getVersionGroup = function(getJSON, url) {
  return getJSON(url)
    .then((pokemon) => getJSON(pokemon.forms[0].url))
    .then((form) => form.version_group)
    .catch((err) => err);
};

// Export a function named getVersionGroupName that takes two arguments.
//    getJSON (function)
//    url (string)
//
// Invoke the getJSON function with the provided URL to send an HTTP GET request
// and return a pending promise. The promise will either be fulfilled with an
// object containing information about a Pokemon or be rejected with an error.
//
// Chain a fulfilled handler onto the above promise that takes one argument.
//    pokemon (object)
// Return the promise from invoking the getJSON function with the URL of the
// first form of the provided pokemon.
//
// Chain a fulfilled handler onto the above promise that takes one argument.
//    form (object)
// Return the name of the version group of the provided form.
//
// Chain a rejected handler onto the above promise that takes one argument.
//    err (object)
// Return the provided error.
//
// Return the final promise from the chain.
module.exports.getVersionGroupName = function(getJSON, url) {
  return getJSON(url)
    .then((pokemon) => getJSON(pokemon.forms[0].url))
    .then((form) => form.version_group.name)
    .catch((err) => err);
};

// Export a function named getVersionGroupUrl that takes two arguments.
//    getJSON (function)
//    url (string)
//
// Invoke the getJSON function with the provided URL to send an HTTP GET request
// and return a pending promise. The promise will either be fulfilled with an
// object containing information about a Pokemon or be rejected with an error.
//
// Chain a fulfilled handler onto the above promise that takes one argument.
//    pokemon (object)
// Return the promise from invoking the getJSON function with the URL of the
// first form of the provided pokemon.
//
// Chain a fulfilled handler onto the above promise that takes one argument.
//    form (object)
// Return the url of the version group of the provided form.
//
// Chain a rejected handler onto the above promise that takes one argument.
//    err (object)
// Return the provided error.
//
// Return the final promise from the chain.
module.exports.getVersionGroupUrl = function(getJSON, url) {
  return getJSON(url)
    .then((pokemon) => getJSON(pokemon.forms[0].url))
    .then((form) => form.version_group.url)
    .catch((err) => err);
};
