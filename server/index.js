require('newrelic');
const express = require('express');

const app = express();
const port = 8080;
const parser = require('body-parser');
const {Review, Customer} = require('./database/index.js');
const bodyparser = parser.json();
// const urlencodedParser = parser.urlencoded({ extended: false });


app.use('/:id', express.static('public'));

// Read / GET 
app.get('/api/homes/:id/reviews', (req, res) => {
  const { id } = req.params;
  Review.findAll({
    attributes: ['id', 'listing_id', 'customer_id', 'review', 'review_date', 'cleanliness', 'communication', 'check_in', 'accuracy', 'location_review', 'value_review'],
    where: { listing_id : id },
    include: [{model: Customer}],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log('err at server from getting info back from db: ', err);
      res.send(err);
    })
});

// // Create / POST - create a new review with an existing user
app.post('/api/homes/:id/reviews', bodyparser, (req, res) => {
  const body = req.body
  // console.log('body', body);
  console.log('req', req);
  Review.create(body)
  .then(() => {
    res.status(201).send('created');
  })
  .catch((err) => {
    res.send(err);
  })
})

/* body sample:
{
    "listing_id": 12967,
    "customer_id": 434343,
    "review": "inserted a new test",
    "review_date": "test",
    "cleanliness": 2.2,
    "communication": 2.2,
    "check_in": 2.2,
    "accuracy": 2.2,
    "location_review": 2.2,
    "value_review": 2.2
}
*/

// // Update / PUT - update an existing review
// app.put('/api/homes/:id/reviews', (req, res) => {
//   const queryArgs = req.body
//   // the id below is review id, not listing product id
//   const id = queryArgs.id;
//   delete queryArgs.id;
//   const queryString = 'UPDATE reviews SET ? WHERE id = ' + db.connection.escape(id);

//   db.connection.query(queryString, queryArgs, (err, response) => {
//     if (err) {
//       console.log(err);
//       res.sendStatus(err);
//     } else {
//       res.send(response);
//     }
//   });
// })


// // Delete / DELETE - delete a review
// app.delete('/api/homes/:id/reviews', (req, res) => {
//   const queryString = 'DELETE FROM reviews WHERE reviews.id = ?';
//   const queryArgs = req.body.id;
//   db.connection.query(queryString, queryArgs, (err, response) => {
//     if (err) {
//       console.log(err);
//       res.sendStatus(err);
//     } else {
//       res.send(response);
//     }
//   });
// })

// // app.use((req, res) => {
// //     res.end();
// // })

app.listen(port, () => {
  console.log('Listening on port 8080');
});
