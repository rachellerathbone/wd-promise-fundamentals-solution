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
// Return the promise from invoking the getJSON function with the URL of the
// version group of the provided form.
//
// Chain a fulfilled handler onto the above promise that takes one argument.
//    versionGroup (object)
// Return the name of the provided versionGroup as a string.
//
// Chain a rejected handler onto the above promise that takes one argument.
//    err (object)
// Return the provided error.
//
// Return the final promise from the chain.
module.exports.getName = function(getJSON, url) {
  return getJSON(url)
    .then((pokemon) => getJSON(pokemon.forms[0].url))
    .then((form) => getJSON(form.version_group.url))
    .then((versionGroup) => versionGroup.name)
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
// Return the promise from invoking the getJSON function with the URL of the
// version group of the provided form.
//
// Chain a fulfilled handler onto the above promise that takes one argument.
//    versionGroup (object)
// Return the id of the provided versionGroup as a number.
//
// Chain a rejected handler onto the above promise that takes one argument.
//    err (object)
// Return the provided error.
//
// Return the final promise from the chain.
module.exports.getId = function(getJSON, url) {
  return getJSON(url)
    .then((pokemon) => getJSON(pokemon.forms[0].url))
    .then((form) => getJSON(form.version_group.url))
    .then((versionGroup) => versionGroup.id)
    .catch((err) => err);
};

// Export a function named getPokedexes that takes two arguments.
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
// Return the promise from invoking the getJSON function with the URL of the
// version group of the provided form.
//
// Chain a fulfilled handler onto the above promise that takes one argument.
//    versionGroup (object)
// Return the pokedexes of the provided versionGroup as an array.
//
// Chain a rejected handler onto the above promise that takes one argument.
//    err (object)
// Return the provided error.
//
// Return the final promise from the chain.
module.exports.getPokedexes = function(getJSON, url) {
  return getJSON(url)
    .then((pokemon) => getJSON(pokemon.forms[0].url))
    .then((form) => getJSON(form.version_group.url))
    .then((versionGroup) => versionGroup.pokedexes)
    .catch((err) => err);
};

// Export a function named getPokedexesCount that takes two arguments.
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
// Return the promise from invoking the getJSON function with the URL of the
// version group of the provided form.
//
// Chain a fulfilled handler onto the above promise that takes one argument.
//    versionGroup (object)
// Return the number of pokedexes of the provided versionGroup.
//
// Chain a rejected handler onto the above promise that takes one argument.
//    err (object)
// Return the provided error.
//
// Return the final promise from the chain.
module.exports.getPokedexesCount = function(getJSON, url) {
  return getJSON(url)
    .then((pokemon) => getJSON(pokemon.forms[0].url))
    .then((form) => getJSON(form.version_group.url))
    .then((versionGroup) => versionGroup.pokedexes.length)
    .catch((err) => err);
};

// Export a function named getFirstPokedex that takes two arguments.
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
// Return the promise from invoking the getJSON function with the URL of the
// version group of the provided form.
//
// Chain a fulfilled handler onto the above promise that takes one argument.
//    versionGroup (object)
// Return the first pokedex object of the provided versionGroup.
//
// Chain a rejected handler onto the above promise that takes one argument.
//    err (object)
// Return the provided error.
//
// Return the final promise from the chain.
module.exports.getFirstPokedex = function(getJSON, url) {
  return getJSON(url)
    .then((pokemon) => getJSON(pokemon.forms[0].url))
    .then((form) => getJSON(form.version_group.url))
    .then((versionGroup) => versionGroup.pokedexes[0])
    .catch((err) => err);
};

// Export a function named getVersions that takes two arguments.
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
// Return the promise from invoking the getJSON function with the URL of the
// version group of the provided form.
//
// Chain a fulfilled handler onto the above promise that takes one argument.
//    versionGroup (object)
// Return the versions of the provided versionGroup as an array.
//
// Chain a rejected handler onto the above promise that takes one argument.
//    err (object)
// Return the provided error.
//
// Return the final promise from the chain.
module.exports.getVersions = function(getJSON, url) {
  return getJSON(url)
    .then((pokemon) => getJSON(pokemon.forms[0].url))
    .then((form) => getJSON(form.version_group.url))
    .then((versionGroup) => versionGroup.versions)
    .catch((err) => err);
};

// Export a function named getVersionsCount that takes two arguments.
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
// Return the promise from invoking the getJSON function with the URL of the
// version group of the provided form.
//
// Chain a fulfilled handler onto the above promise that takes one argument.
//    versionGroup (object)
// Return the number of versions of the provided versionGroup.
//
// Chain a rejected handler onto the above promise that takes one argument.
//    err (object)
// Return the provided error.
//
// Return the final promise from the chain.
module.exports.getVersionsCount = function(getJSON, url) {
  return getJSON(url)
    .then((pokemon) => getJSON(pokemon.forms[0].url))
    .then((form) => getJSON(form.version_group.url))
    .then((versionGroup) => versionGroup.versions.length)
    .catch((err) => err);
};

// Export a function named getVersionsNames that takes two arguments.
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
// Return the promise from invoking the getJSON function with the URL of the
// version group of the provided form.
//
// Chain a fulfilled handler onto the above promise that takes one argument.
//    versionGroup (object)
// Return the names of the versions of the provided versionGroup as an array.
//
// Chain a rejected handler onto the above promise that takes one argument.
//    err (object)
// Return the provided error.
//
// Return the final promise from the chain.
module.exports.getVersionsNames = function(getJSON, url) {
  return getJSON(url)
    .then((pokemon) => getJSON(pokemon.forms[0].url))
    .then((form) => getJSON(form.version_group.url))
    .then((vGroup) => vGroup.versions.map((version) => version.name))
    .catch((err) => err);
};

// Export a function named getVersionsUrls that takes two arguments.
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
// Return the promise from invoking the getJSON function with the URL of the
// version group of the provided form.
//
// Chain a fulfilled handler onto the above promise that takes one argument.
//    versionGroup (object)
// Return the urls of the versions of the provided versionGroup as an array.
//
// Chain a rejected handler onto the above promise that takes one argument.
//    err (object)
// Return the provided error.
//
// Return the final promise from the chain.
module.exports.getVersionsUrls = function(getJSON, url) {
  return getJSON(url)
    .then((pokemon) => getJSON(pokemon.forms[0].url))
    .then((form) => getJSON(form.version_group.url))
    .then((vGroup) => vGroup.versions.map((version) => version.url))
    .catch((err) => err);
};

// Export a function named getHabitatAndShapeFromSpeciesUrl that takes two arguments.
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
// pokemon species.
//
// Chain a fulfilled handler onto the above promise that takes one argument.
//    species (object)
//
// Return an object with the following keys:
//     name: The name of the pokemon
//     height: The height of the pokemon
//     weight: The weight of the pokemon
//     habitat: The name of the pokemon's habitat
//     shape: The name of the pokemon's shape
//
// Chain a rejected handler onto the above promise that takes one argument.
//    err (object)
// Return the provided error.
//
// HINT: Pay close attention to which pieces of pokemon info come from the
// pokemon object versus the species object.
// Check out the API documention for the pokemon object here:
//      http://pokeapi.co/docsv2/#pokemon
// Check out the API documention for the species object here:
//      http://pokeapi.co/docsv2/#pokemon-species

module.exports.getHabitatAndShapeFromSpeciesUrl = function(getJSON, url) {
  const obj = {};
  return getJSON(url)
    .then((pokemon) => {
      obj.name = pokemon.name;
      obj.height = pokemon.height;
      obj.weight = pokemon.weight;
      return getJSON(pokemon.species.url)
    })
    .then((species) => {
      obj.habitat = species.habitat.name;
      obj.shape = species.shape.name;
      return obj;
    })
    .catch((err) => err);
};
