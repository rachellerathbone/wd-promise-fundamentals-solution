'use strict';

const assert = require('chai').assert;
const { suite, test } = require('mocha');
const path = require('path');
const mockFS = require('mock-fs');
const nock = require('nock');
const lib = require('../lib/1_new_promise');
const expected = require('./expected/pokemon.expected');
const pokemonPath = path.join(__dirname, 'expected', 'pokemon.expected.json');
const url = 'http://pokeapi.co/api/v2/pokemon/pikachu/';
const catchMe = new Error('Catch me');

suite('new promise', () => {
  suite('read JSON', () => {
    test('fulfilled', (done) => {
      mockFS({ [pokemonPath]: JSON.stringify(expected) });

      lib.readJSON(pokemonPath)
        .then((actual) => {
          assert.deepEqual(actual, expected);
          mockFS.restore();
          done();
        })
        .catch((err) => {
          done(err);
        });
    });

    test('rejected', (done) => {
      lib.readJSON(path.join('/catch/me'))
        .catch((actual) => {
          const message = "ENOENT: no such file or directory, open '/catch/me'";

          assert.instanceOf(actual, Error);
          assert.strictEqual(actual.message, message);
          done();
        })
        .catch((err) => {
          done(err);
        });
    });
  });

  suite('write JSON', () => {
    const expectedJSON = JSON.stringify(expected);

    test('fulfilled', (done) => {
      mockFS({ [pokemonPath]: '' });

      lib.writeJSON(pokemonPath, expectedJSON)
        .then((actual) => {
          assert.deepEqual(actual, expected);
          mockFS.restore();
          done();
        })
        .catch((err) => {
          done(err);
        });
    });

    test('rejected', (done) => {
      lib.writeJSON(path.join('/catch/me'), expectedJSON)
        .catch((actual) => {
          const message = "ENOENT: no such file or directory, open '/catch/me'";

          assert.instanceOf(actual, Error);
          assert.strictEqual(actual.message, message);
          done();
        })
        .catch((err) => {
          done(err);
        });
    });
  });

  suite('get JSON', () => {
    test('fulfilled', (done) => {
      nock('http://pokeapi.co')
        .get('/api/v2/pokemon/pikachu/')
        .reply(200, expected);

      lib.getJSON(url)
        .then((actual) => {
          assert.deepEqual(actual, expected);
          done();
        })
        .catch((err) => {
          done(err);
        });
    });

    test('rejected', (done) => {
      nock('http://pokeapi.co')
        .get('/api/v2/pokemon/pikachu/')
        .replyWithError(catchMe);

      lib.getJSON(url)
        .catch((actual) => {
          assert.strictEqual(actual, catchMe);
          done();
        })
        .catch((err) => {
          done(err);
        });
    });
  });

  suite('post JSON', () => {
    const expectedJSON = JSON.stringify(expected);

    test('fulfilled', (done) => {
      nock('http://pokeapi.co')
        .post('/api/v2/pokemon/pikachu/', expectedJSON)
        .reply(200, expectedJSON);

      lib.postJSON(url, expectedJSON)
        .then((actual) => {
          assert.deepEqual(actual, expected);
          done();
        })
        .catch((err) => {
          done(err);
        });
    });

    test('rejected', (done) => {
      nock('http://pokeapi.co')
        .post('/api/v2/pokemon/pikachu/', expected)
        .replyWithError(catchMe);

      lib.postJSON(url, expectedJSON)
        .catch((actual) => {
          assert.strictEqual(actual, catchMe);
          done();
        })
        .catch((err) => {
          done(err);
        });
    });
  });
});
