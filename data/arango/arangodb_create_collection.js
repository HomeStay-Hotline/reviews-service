const Database = require('arangojs').Database;

const db = new Database();
db.createDatabase('airBnBReviews').then(
  () => console.log('airBnBReviews db is created'),
  err => console.error('Failed to create database:', err.body)
);
// what if db already exists?

// cli
// gui   
// benchmark : arango: two collections or one collections.

// Because we’re trying to actually do something on the server, this action is asynchronous.
// All asynchronous methods in the ArangoDB driver return promises but you can also pass a node-style callback instead