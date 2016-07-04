'use strict';

const assert = require('chai').assert;
const { suite, test } = require('mocha');
const nock = require('nock');
const getJSON = require('../lib/1_new_promise').getJSON;
const lib = require('../lib/4_pokemon_form_version_group');
const pokemonExpected = require('./expected/pokemon.expected');
const pokemonFormExpected = require('./expected/pokemon_form.expected');
const expected = require('./expected/pokemon_form_version_group.expected');
const url = 'http://pokeapi.co/api/v2/pokemon/pikachu/';
const catchMe = new Error('Catch me');
const getError = function(_url) {
  return Promise.reject(catchMe);
};

suite('pokemon form version group', () => {
  beforeEach(() => {
    nock('http://pokeapi.co')
      .get('/api/v2/pokemon/pikachu/')
      .reply(200, pokemonExpected);

    nock('http://pokeapi.co')
      .get('/api/v2/pokemon-form/25/')
      .reply(200, pokemonFormExpected);

    nock('http://pokeapi.co')
      .get('/api/v2/version-group/1/')
      .reply(200, expected);
  });

  suite('get name', () => {
    test('fulfilled', (done) => {
      lib.getName(getJSON, url)
        .then((actual) => {
          assert.strictEqual(actual, expected.name);
          done();
        })
        .catch((err) => {
          done(err);
        });
    });

    test('rejected', (done) => {
      lib.getName(getError, url)
        .then((actual) => {
          assert.strictEqual(actual, catchMe);
          done();
        })
        .catch((err) => {
          done(err);
        });
    });
  });

  suite('get id', () => {
    test('fulfilled', (done) => {
      lib.getId(getJSON, url)
        .then((actual) => {
          assert.strictEqual(actual, expected.id);
          done();
        })
        .catch((err) => {
          done(err);
        });
    });

    test('rejected', (done) => {
      lib.getId(getError, url)
        .then((actual) => {
          assert.strictEqual(actual, catchMe);
          done();
        })
        .catch((err) => {
          done(err);
        });
    });
  });

  suite('get pokedexes', () => {
    test('fulfilled', (done) => {
      lib.getPokedexes(getJSON, url)
        .then((actual) => {
          assert.deepEqual(actual, expected.pokedexes);
          done();
        })
        .catch((err) => {
          done(err);
        });
    });

    test('rejected', (done) => {
      lib.getPokedexes(getError, url)
        .then((actual) => {
          assert.strictEqual(actual, catchMe);
          done();
        })
        .catch((err) => {
          done(err);
        });
    });
  });

  suite('get pokedexes count', () => {
    test('fulfilled', (done) => {
      lib.getPokedexesCount(getJSON, url)
        .then((actual) => {
          assert.strictEqual(actual, expected.pokedexes.length);
          done();
        })
        .catch((err) => {
          done(err);
        });
    });

    test('rejected', (done) => {
      lib.getPokedexesCount(getError, url)
        .then((actual) => {
          assert.strictEqual(actual, catchMe);
          done();
        })
        .catch((err) => {
          done(err);
        });
    });
  });

  suite('get first pokedex', () => {
    test('fulfilled', (done) => {
      lib.getFirstPokedex(getJSON, url)
        .then((actual) => {
          assert.deepEqual(actual, expected.pokedexes[0]);
          done();
        })
        .catch((err) => {
          done(err);
        });
    });

    test('rejected', (done) => {
      lib.getFirstPokedex(getError, url)
        .then((actual) => {
          assert.strictEqual(actual, catchMe);
          done();
        })
        .catch((err) => {
          done(err);
        });
    });
  });

  suite('get versions', () => {
    test('fulfilled', (done) => {
      lib.getVersions(getJSON, url)
        .then((actual) => {
          assert.deepEqual(actual, expected.versions);
          done();
        })
        .catch((err) => {
          done(err);
        });
    });

    test('rejected', (done) => {
      lib.getVersions(getError, url)
        .then((actual) => {
          assert.strictEqual(actual, catchMe);
          done();
        })
        .catch((err) => {
          done(err);
        });
    });
  });

  suite('get versions count', () => {
    test('fulfilled', (done) => {
      lib.getVersionsCount(getJSON, url)
        .then((actual) => {
          assert.strictEqual(actual, expected.versions.length);
          done();
        })
        .catch((err) => {
          done(err);
        });
    });

    test('rejected', (done) => {
      lib.getVersionsCount(getError, url)
        .then((actual) => {
          assert.strictEqual(actual, catchMe);
          done();
        })
        .catch((err) => {
          done(err);
        });
    });
  });

  suite('get versions names', () => {
    test('fulfilled', (done) => {
      lib.getVersionsNames(getJSON, url)
        .then((actual) => {
          // eslint-disable-next-line max-nested-callbacks
          const names = expected.versions.map((version) => version.name);

          assert.deepEqual(actual, names);
          done();
        })
        .catch((err) => {
          done(err);
        });
    });

    test('rejected', (done) => {
      lib.getVersionsNames(getError, url)
        .then((actual) => {
          assert.strictEqual(actual, catchMe);
          done();
        })
        .catch((err) => {
          done(err);
        });
    });
  });

  suite('get versions urls', () => {
    test('fulfilled', (done) => {
      lib.getVersionsUrls(getJSON, url)
        .then((actual) => {
          // eslint-disable-next-line max-nested-callbacks
          const urls = expected.versions.map((version) => version.urls);

          assert.deepEqual(actual, urls);
          done();
        })
        .catch((err) => {
          done(err);
        });
    });

    test('rejected', (done) => {
      lib.getVersionsUrls(getError, url)
        .then((actual) => {
          assert.strictEqual(actual, catchMe);
          done();
        })
        .catch((err) => {
          done(err);
        });
    });
  });
});
