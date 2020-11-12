const express = require('express');
const app = express();
const port = 8080;
const parser = require('body-parser');
const db = require('../seeding.js');


app.use(parser.json());

app.use(express.static('public'));

app.get('/id', (req, res) => {
    res.send('hello');
})

app.listen(port, () => {
    console.log('Listening on port 8080');
})