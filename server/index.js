const express = require('express');

const app = express();
const port = 8080;
const parser = require('body-parser');
const db = require('./database/index.js');
const morgan = require('morgan');

app.use(parser.json());
app.use(morgan('dev'));

app.use('/:id', express.static('public'));

// Read / GET 
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

// Create / POST - create a new review with an existing user
app.post('/api/homes/:id/reviews', (req, res) => {
  const { id } = req.params;
  const body = req.body
  console.log('body', body);
  const queryString = 'INSERT INTO reviews SET ?';
  body.listing_id = id;
  body.review_date = new Date().toISOString().slice(0, 19).replace('T', ' ');
  const queryArgs = body;
  console.log('queryArgs: ', queryArgs);
  db.connection.query(queryString, queryArgs, (err, response) => {
    if (err) {
      console.log(err);
      res.sendStatus(err);
    } else {
      res.send(response);
    }
  });
})

// Update / PUT - update an existing review
app.put('/api/homes/:id/reviews', (req, res) => {
  const queryArgs = req.body
  // the id below is review id, not listing product id
  const id = queryArgs.id;
  delete queryArgs.id;
  const queryString = 'UPDATE reviews SET ? WHERE id = ' + db.connection.escape(id);

  db.connection.query(queryString, queryArgs, (err, response) => {
    if (err) {
      console.log(err);
      res.sendStatus(err);
    } else {
      res.send(response);
    }
  });
})


// Delete / DELETE - delete a review
app.delete('/api/homes/:id/reviews', (req, res) => {
  const queryString = 'DELETE FROM reviews WHERE reviews.id = ?';
  const queryArgs = req.body.id;
  db.connection.query(queryString, queryArgs, (err, response) => {
    if (err) {
      console.log(err);
      res.sendStatus(err);
    } else {
      res.send(response);
    }
  });
})

// app.use((req, res) => {
//     res.end();
// })

app.listen(port, () => {
  console.log('Listening on port 8080');
});
