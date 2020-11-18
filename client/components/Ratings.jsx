import React, { Component } from 'react';

const Ratings = (props) => (
  <div>
    <div className="ratingHead">
      <i className="fas fa-star" style={{ color: 'red' }} />
      {' '}
      {props.ratings[6]}
      {' '}
      {`(${props.totalReviews} reviews)`}
    </div>
    <div className="rating">
      <div className="bar">
        <div className="ratingType">
          Cleanliness
        </div>
        <div className="barObj">
          <div className="innerBar">
            <span className="progress" style={{ width: `calc(100% * ${(props.ratings[0] / 5)})` }}> </span>
          </div>
        </div>
        <div className="ratingNumber">
          {props.ratings[0]}
        </div>
      </div>
    </div>
    <div className="rating">
      <div className="bar">
        <div className="ratingType">
          Accuracy
        </div>
        <div className="barObj">
          <div className="innerBar">
            <span className="progress" style={{ width: `calc(100% * ${(props.ratings[1] / 5)})` }}> </span>
          </div>
        </div>
        <div className="ratingNumber">
          {props.ratings[1]}
        </div>
      </div>
    </div>
    <div className="rating">
      <div className="bar">
        <div className="ratingType">
          Communication
        </div>
        <div className="barObj">
          <div className="innerBar">
            <span className="progress" style={{ width: `calc(100% * ${(props.ratings[2] / 5)})` }}> </span>
          </div>
        </div>
        <div className="ratingNumber">
          {props.ratings[2]}
        </div>
      </div>
    </div>
    <div className="rating">
      <div className="bar">
        <div className="ratingType">
          Location
        </div>
        <div className="barObj">
          <div className="innerBar">
            <span className="progress" style={{ width: `calc(100% * ${(props.ratings[3] / 5)})` }}> </span>
          </div>
        </div>
        <div className="ratingNumber">
          {props.ratings[0]}
        </div>
      </div>
    </div>
    <div className="rating">
      <div className="bar">
        <div className="ratingType">
          Check-in
        </div>
        <div className="barObj">
          <div className="innerBar">
            <span className="progress" style={{ width: `calc(100% * ${(props.ratings[4] / 5)})` }}> </span>
          </div>
        </div>
        <div className="ratingNumber">
          {props.ratings[4]}
        </div>
      </div>
    </div>
    <div className="rating">
      <div className="bar">
        <div className="ratingType">
          Value
        </div>
        <div className="barObj">
          <div className="innerBar">
            <span className="progress" style={{ width: `calc(100% * ${(props.ratings[5] / 5)})` }}> </span>
          </div>
        </div>
        <div className="ratingNumber">
          {props.ratings[5]}
        </div>
      </div>
    </div>
  </div>
);

export default Ratings;
