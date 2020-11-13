const express = require('express');
const app = express();
const port = 8080;
const parser = require('body-parser');
const db = require('./database/index.js');


app.use(parser.json());

app.use(express.static('public'));

app.get('/id', (req, res) => {
    var queryString = 'SELECT * FROM reviews';
    db.connection.query(queryString, (err, response) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        } else {
            res.send(response);
        }
    })
})

app.listen(port, () => {
    console.log('Listening on port 8080');
})