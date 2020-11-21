import React from 'react';
import Review from './Review.jsx';

const Reviews = (props) => {
  const rev = [];
  const {
    reviews,
  } = props;

  for (let i = 0; i < 6; i++) {
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
