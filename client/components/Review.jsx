import React from 'react';

const Review = (props) => (
  <div>
    <img src={props.review.url} className="avatar" />
    {props.review.user}
    {props.review.review_date}
    {props.review.review}
  </div>
);

export default Review;
