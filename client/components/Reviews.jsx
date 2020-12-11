import React from 'react';
import Review from './Review.jsx';

const Reviews = (props) => {
  const rev = [];
  const {
    reviews,
  } = props;
  let num_of_reviews = 6;
  if (reviews.length < num_of_reviews) {
    num_of_reviews = reviews.length;
  }
  for (let i = 0; i < num_of_reviews; i++) {
    rev.push(reviews[i]);
  }

  return (
    <div>
      {
        rev.map((review, i) => (
          <Review review={review} key={i} />
        ))
      }
    </div>
  );
};

export default Reviews;
