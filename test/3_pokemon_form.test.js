'use strict';

const assert = require('chai').assert;
const { suite, test } = require('mocha');
const nock = require('nock');
const getJSON = require('../lib/1_new_promise').getJSON;
const lib = require('../lib/3_pokemon_form');
const pokemonExpected = require('./expected/pokemon.expected');
const expected = require('./expected/pokemon_form.expected');
const url = 'http://pokeapi.co/api/v2/pokemon/pikachu/';
const catchMe = new Error('Catch me');
const getError = function(_url) {
  return Promise.reject(catchMe);
};

suite('pokemon form', () => {
  beforeEach(() => {
    nock('http://pokeapi.co')
      .get('/api/v2/pokemon/pikachu/')
      .reply(200, pokemonExpected);

    nock('http://pokeapi.co')
      .get('/api/v2/pokemon-form/25/')
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

  suite('get is battle only or mega', () => {
    test('fulfilled', (done) => {
      lib.getIsBattleOnlyOrMega(getJSON, url)
        .then((actual) => {
          const expctd = expected.is_battle_only || expected.is_mega;

          assert.strictEqual(actual, expctd);
          done();
        })
        .catch((err) => {
          done(err);
        });
    });

    test('rejected', (done) => {
      lib.getIsBattleOnlyOrMega(getError, url)
        .then((actual) => {
          assert.strictEqual(actual, catchMe);
          done();
        })
        .catch((err) => {
          done(err);
        });
    });
  });

  suite('get sprites', () => {
    test('fulfilled', (done) => {
      lib.getSprites(getJSON, url)
        .then((actual) => {
          assert.deepEqual(actual, expected.sprites);
          done();
        })
        .catch((err) => {
          done(err);
        });
    });

    test('rejected', (done) => {
      lib.getSprites(getError, url)
        .then((actual) => {
          assert.strictEqual(actual, catchMe);
          done();
        })
        .catch((err) => {
          done(err);
        });
    });
  });

  suite('get sprite keys', () => {
    test('fulfilled', (done) => {
      lib.getSpriteKeys(getJSON, url)
        .then((actual) => {
          assert.deepEqual(actual, Object.keys(expected.sprites));
          done();
        })
        .catch((err) => {
          done(err);
        });
    });

    test('rejected', (done) => {
      lib.getSpriteKeys(getError, url)
        .then((actual) => {
          assert.strictEqual(actual, catchMe);
          done();
        })
        .catch((err) => {
          done(err);
        });
    });
  });

  suite('get sprite values', () => {
    test('fulfilled', (done) => {
      lib.getSpriteValues(getJSON, url)
        .then((actual) => {
          const values = [];

          for (const key in expected.sprites) {
            values.push(expected.sprites[key]);
          }

          assert.deepEqual(actual, values);
          done();
        })
        .catch((err) => {
          done(err);
        });
    });

    test('rejected', (done) => {
      lib.getSpriteValues(getError, url)
        .then((actual) => {
          assert.strictEqual(actual, catchMe);
          done();
        })
        .catch((err) => {
          done(err);
        });
    });
  });

  suite('get version group', () => {
    test('fulfilled', (done) => {
      lib.getVersionGroup(getJSON, url)
        .then((actual) => {
          assert.deepEqual(actual, expected.version_group);
          done();
        })
        .catch((err) => {
          done(err);
        });
    });

    test('rejected', (done) => {
      lib.getVersionGroup(getError, url)
        .then((actual) => {
          assert.strictEqual(actual, catchMe);
          done();
        })
        .catch((err) => {
          done(err);
        });
    });
  });

  suite('get version group name', () => {
    test('fulfilled', (done) => {
      lib.getVersionGroupName(getJSON, url)
        .then((actual) => {
          assert.strictEqual(actual, expected.version_group.name);
          done();
        })
        .catch((err) => {
          done(err);
        });
    });

    test('rejected', (done) => {
      lib.getVersionGroupName(getError, url)
        .then((actual) => {
          assert.strictEqual(actual, catchMe);
          done();
        })
        .catch((err) => {
          done(err);
        });
    });
  });

  suite('get version group url', () => {
    test('fulfilled', (done) => {
      lib.getVersionGroupUrl(getJSON, url)
        .then((actual) => {
          assert.strictEqual(actual, expected.version_group.url);
          done();
        })
        .catch((err) => {
          done(err);
        });
    });

    test('rejected', (done) => {
      lib.getVersionGroupUrl(getError, url)
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
