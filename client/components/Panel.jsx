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
          <span
            className="close"
            onClick={() => {
              modal.style.display = 'none';
            }}
          >
            &times;
          </span>
          <div>
            <PanelRatings ratings={props.ratings} totalReviews={props.reviews.length} />
          </div>
          <div>
            <Search getSearch={getSearch}/>
            <PanelReviews reviews={props.reviews} filter={filter}/>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Panel;
