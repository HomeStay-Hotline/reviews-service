import React from 'react';

const PanelReview = (props) => {
  const date = props.review.review_date;
  // const arrDate = date.split('-');
  // const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
  //   'August', 'September', 'October', 'November', 'December'];
  // const modifiedDate = `${months[Number(arrDate[1]) - 1]} ${arrDate[0]}`;
  const modifiedDate = date.slice(3, 15);

  return (
    <div className="panelReview">
      <div className="reviewTop">
        <div>
          <img src={props.review.customer.photo_url} className="avatar" key={props.key} />
        </div>
        <div>
          <div className="user">
            {props.review.user}
          </div>
          <div className="date">
            {modifiedDate}
          </div>
        </div>
      </div>
      {props.review.review}
    </div>

  );
};

export default PanelReview;
