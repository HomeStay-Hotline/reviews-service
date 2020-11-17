import React, { Component } from 'react';

const Ratings = (props) => (
  <div>
    <div className="ratingHead">
        {props.ratings[6]}
    </div>
    <div>
      Cleanliness
      {' '}
      {props.ratings[0]}
      {' '}
      Accuracy
      {' '}
      {props.ratings[1]}
    </div>
    <div>
      Communication
      {' '}
      {props.ratings[2]}
      {' '}
      Location
      {' '}
      {props.ratings[3]}
    </div>
    <div>
      Check in
      {' '}
      {props.ratings[4]}
      {' '}
      Value
      {' '}
      {props.ratings[5]}
    </div>
  </div>
);

export default Ratings;
