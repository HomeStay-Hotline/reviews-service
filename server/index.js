const express = require('express');

const app = express();
const port = 8080;
const parser = require('body-parser');
const db = require('./database/index.js');
const morgan = require('morgan');

app.use(parser.json());
app.use(morgan('dev'));

app.use('/:id', express.static('public'));

app.get('/api/homes/:id/reviews', (req, res) => {
  const { id } = req.params;
  const queryString = 'SELECT * FROM reviews WHERE reviews.listing_id = ?';
  const queryArgs = [id];
  db.connection.query(queryString, queryArgs, (err, response) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.send(response);
    }
  });
});

// app.use((req, res) => {
//     res.end();
// })

app.listen(port, () => {
  console.log('Listening on port 8080');
});
