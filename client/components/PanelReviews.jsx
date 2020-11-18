import React from 'react';
import PanelReview from './PanelReview.jsx';

const PanelReviews = (props) => (
  <div>
    {
        props.reviews.map((review, i) => {
          if (review.review.toLowerCase().includes(props.filter.toLowerCase())) {
            return (
              <PanelReview review={review} key={i} />
            );
          }
        })
    }
  </div>
);

export default PanelReviews;
