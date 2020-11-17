import React from 'react';
import Modal from 'react-modal';
import PanelRatings from './PanelRatings.jsx';
import PanelReviews from './PanelReviews.jsx';

const Panel = (props) => (
  <Modal isOpen={props.modalOpen}>
    <button onClick={props.seeAllReviews}>X</button>
    <div>
        {props.ratings[6]}
        {' '}
        {`(${props.reviews.length}) Reviews`}
    </div>
    <div>
      <PanelRatings ratings={props.ratings} />
    </div>
    <div>
      <PanelReviews reviews={props.reviews} />
    </div>
  </Modal>
);

export default Panel;
