const Database = require('arangojs').Database;

const db = new Database();
db.createDatabase('airBnBReviews').then(
  () => console.log('airBnBReviews db is created'),
  err => console.error('Failed to create database:', err.body)
);
// what if db already exists?

// This is async !!!
// db.useDatabase('mydb');

// Unlike databases, the collection doesn’t have to already exist before we can create the handle
collection = db.collection('firstCollection');
collection.create().then(
  () => console.log('Collection created'),
  err => console.error('Failed to create collection:', err)
);
// https://www.arangodb.com/tutorials/tutorial-node-js/

// cli
// gui   
// benchmark : arango: two collections or one collections.

// Because we’re trying to actually do something on the server, this action is asynchronous.
// All asynchronous methods in the ArangoDB driver return promises but you can also pass a node-style callback instead