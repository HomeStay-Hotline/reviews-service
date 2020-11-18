import React, { Component } from 'react';

const PanelRatings = (props) => (
  <div className="sticky">
    <div className="ratingHead">
      {props.ratings[6]}
      {' '}
      {`(${props.totalReviews} reviews)`}
    </div>
    <div className="panelRating">
      <div className="bar">
        <div className="ratingType">
          Cleanliness
        </div>
        <div className="barObj">
          <span className="barObj" />
        </div>
        <div className="ratingNumber">
          {props.ratings[0]}
        </div>
      </div>
    </div>
    <div className="panelRating">
      <div className="bar">
        <div className="ratingType">
          Accuracy
        </div>
        <div className="barObj">
          <span className="barObj" />
        </div>
        <div className="ratingNumber">
          {props.ratings[1]}
        </div>
      </div>
    </div>
    <div className="panelRating">
      <div className="bar">
        <div className="ratingType">
          Communication
        </div>
        <div className="barObj">
          <span className="barObj" />
        </div>
        <div className="ratingNumber">
          {props.ratings[2]}
        </div>
      </div>
    </div>
    <div className="panelRating">
      <div className="bar">
        <div className="ratingType">
          Location
        </div>
        <div className="barObj">
          <span className="barObj" />
        </div>
        <div className="ratingNumber">
          {props.ratings[3]}
        </div>
      </div>
    </div>
    <div className="panelRating">
      <div className="bar">
        <div className="ratingType">
          Check in
        </div>
        <div className="barObj">
          <span className="barObj" />
        </div>
        <div className="ratingNumber">
          {props.ratings[4]}
        </div>
      </div>
    </div>
    <div>
      <div className="bar">
        <div className="ratingType">
          Value
        </div>
        <div className="barObj">
          <span className="barObj" />
        </div>
        <div className="ratingNumber">
          {props.ratings[5]}
        </div>
      </div>
    </div>
  </div>
);

export default PanelRatings;
