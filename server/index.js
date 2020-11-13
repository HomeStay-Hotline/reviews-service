const express = require('express');
const app = express();
const port = 8080;
const parser = require('body-parser');
const db = require('./database/index.js');


app.use(parser.json());

app.use(express.static('public'));

app.get('/api/home/:id/reviews', (req, res) => {
    let id = req.params.id;
    var queryString = 'SELECT * FROM reviews WHERE reviews.listing_id = ?';
    var queryArgs = [id];
    db.connection.query(queryString, queryArgs, (err, response) => {
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