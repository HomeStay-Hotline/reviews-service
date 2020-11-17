import React from 'react';

const PanelRatings = (props) => (
  <div>
    <div>
      {props.ratings[6]}
      {' '}
      {`(${props.totalReviews}) Reviews`}
    </div>
    <div>
      Cleanliness
      {' '}
      {props.ratings[0]}
    </div>
    <div>
      Accuracy
      {' '}
      {props.ratings[1]}
    </div>
    <div>
      Communication
      {' '}
      {props.ratings[2]}
    </div>
    <div>
      Location
      {' '}
      {props.ratings[3]}
    </div>
    <div>
      Check in
      {' '}
      {props.ratings[4]}
    </div>
    <div>
      Value
      {' '}
      {props.ratings[5]}
    </div>
  </div>
);

export default PanelRatings;
