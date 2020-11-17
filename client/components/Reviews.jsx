import React from 'react';
import Review from './Review.jsx';
import Panel from './Panel.jsx';

const Reviews = (props) => {
  const rev = [];
  const {
    reviews, modalOpen, ratings, seeAllReviews,
  } = props;

  for (let i = 0; i < 6; i++) {
    rev.push(reviews[i]);
  }


  return (
    <div>
      {
        rev.map((review) => (
          <Review review={review} />
        ))
      }
      <div>
        <button type="button" onClick={seeAllReviews}>
          See All
          {' '}
          {reviews.length}
          {' '}
          Reviews
        </button>
        <Panel
          modalOpen={modalOpen}
          seeAllReviews={props.seeAllReviews}
          ratings={ratings}
          reviews={reviews}
        />
      </div>
    </div>
  );
};

export default Reviews;
