'use strict';

const assert = require('chai').assert;
const { suite, test } = require('mocha');
const nock = require('nock');
const getJSON = require('../lib/1_new_promise').getJSON;
const lib = require('../lib/2_pokemon');
const expected = require('./expected/pokemon.expected');
const url = 'http://pokeapi.co/api/v2/pokemon/pikachu/';
const catchMe = new Error('Catch me');
const getError = function(_url) {
  return Promise.reject(catchMe);
};

suite('pokemon', () => {
  beforeEach(() => {
    nock('http://pokeapi.co')
      .get('/api/v2/pokemon/pikachu/')
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

  suite('get base experience', () => {
    test('fulfilled', (done) => {
      lib.getBaseExperience(getJSON, url)
        .then((actual) => {
          assert.strictEqual(actual, expected.base_experience);
          done();
        })
        .catch((err) => {
          done(err);
        });
    });

    test('rejected', (done) => {
      lib.getBaseExperience(getError, url)
      .then((actual) => {
        assert.strictEqual(actual, catchMe);
        done();
      })
      .catch((err) => {
        done(err);
      });
    });
  });

  suite('get height and weigt', () => {
    test('fulfilled', (done) => {
      lib.getHeightAndWeight(getJSON, url)
        .then((actual) => {
          assert.deepEqual(actual, [expected.height, expected.weight]);
          done();
        })
        .catch((err) => {
          done(err);
        });
    });

    test('rejected', (done) => {
      lib.getHeightAndWeight(getError, url)
        .then((actual) => {
          assert.strictEqual(actual, catchMe);
          done();
        })
        .catch((err) => {
          done(err);
        });
    });
  });

  suite('get forms', () => {
    test('fulfilled', (done) => {
      lib.getForms(getJSON, url)
        .then((actual) => {
          assert.deepEqual(actual, expected.forms);
          done();
        })
        .catch((err) => {
          done(err);
        });
    });

    test('rejected', (done) => {
      lib.getForms(getError, url)
        .then((actual) => {
          assert.strictEqual(actual, catchMe);
          done();
        })
        .catch((err) => {
          done(err);
        });
    });
  });

  suite('get forms count', () => {
    test('fulfilled', (done) => {
      lib.getFormsCount(getJSON, url)
        .then((actual) => {
          assert.deepEqual(actual, expected.forms.length);
          done();
        })
        .catch((err) => {
          done(err);
        });
    });

    test('rejected', (done) => {
      lib.getFormsCount(getError, url)
        .then((actual) => {
          assert.strictEqual(actual, catchMe);
          done();
        })
        .catch((err) => {
          done(err);
        });
    });
  });

  suite('get first form', () => {
    test('fulfilled', (done) => {
      lib.getFirstForm(getJSON, url)
        .then((actual) => {
          assert.deepEqual(actual, expected.forms[0]);
          done();
        })
        .catch((err) => {
          done(err);
        });
    });

    test('rejected', (done) => {
      lib.getFirstForm(getError, url)
        .then((actual) => {
          assert.strictEqual(actual, catchMe);
          done();
        })
        .catch((err) => {
          done(err);
        });
    });
  });

  suite('get first form name', () => {
    test('fulfilled', (done) => {
      lib.getFirstFormName(getJSON, url)
        .then((actual) => {
          assert.deepEqual(actual, expected.forms[0].name);
          done();
        })
        .catch((err) => {
          done(err);
        });
    });

    test('rejected', (done) => {
      lib.getFirstFormName(getError, url)
        .then((actual) => {
          assert.strictEqual(actual, catchMe);
          done();
        })
        .catch((err) => {
          done(err);
        });
    });
  });

  suite('get first form url', () => {
    test('fulfilled', (done) => {
      lib.getFirstFormUrl(getJSON, url)
        .then((actual) => {
          assert.deepEqual(actual, expected.forms[0].url);
          done();
        })
        .catch((err) => {
          done(err);
        });
    });

    test('rejected', (done) => {
      lib.getFirstFormUrl(getError, url)
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
