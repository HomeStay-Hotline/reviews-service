import React from 'react';
import Review from './Review.jsx';

const PanelReviews = (props) => (
  <div>
    {
        props.reviews.map((review, i) => {
          if (review.review.toLowerCase().includes(props.filter.toLowerCase())) {
            return (
              <Review review={review} key={i} />
            );
          }
        })
    }
  </div>
);

export default PanelReviews;
