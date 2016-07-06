'use strict';

module.exports = {
  extends: [
    'ryansobol/es6',
    'ryansobol/node'
  ],

  globals: {
    'beforeEach': false
  },

  rules: {
    'arrow-body-style': ['error', 'as-needed']
  }
};
