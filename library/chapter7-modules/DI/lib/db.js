const level = require('level');
const sublevel = require('level-sublevel');

module.exports = dbName => {
  return sublevel (
    level('example-db', { valueEncoding: 'json' })
  )
};