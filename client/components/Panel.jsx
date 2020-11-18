import React, { useState } from 'react';
import PanelRatings from './PanelRatings.jsx';
import PanelReviews from './PanelReviews.jsx';
import Search from './Search.jsx';

const Panel = (props) => {
  const modal = document.getElementById('myModal');
  const [filter, setFilter] = useState('');

  function getSearch(input) {
    setFilter(input);
  }

  return (
    <div>
      <button
        id="modalBtn"
        type="button"
        className="seeAll"
        onClick={() => {
          modal.style.display = 'block';
        }}
      >
        See All
        {' '}
        {props.reviews.length}
        {' '}
        Reviews
      </button>
      <div id="myModal" className="modal">
        <div className="modal-content">
          <div className="flexbox-item">
            <span
              className="close"
              onClick={() => {
                modal.style.display = 'none';
              }}
            >
              &times;
            </span>
            <PanelRatings ratings={props.ratings} totalReviews={props.reviews.length} />
          </div>
          <div className="flexbox-item-2">
            <Search getSearch={getSearch} />
            <PanelReviews reviews={props.reviews} filter={filter} />
          </div>
        </div>
      </div>
    </div>

  );
};

export default Panel;
