import React, { useState } from 'react';

const Review = (props) => {
  const date = props.review.review_date;
  // const arrDate = date.split('-');
  // const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
  //   'August', 'September', 'October', 'November', 'December'];
  // const modifiedDate = `${months[Number(arrDate[1]) - 1]} ${arrDate[0]}`;
  const modifiedDate = date.slice(3, 15);
  const [readMore, selectRead] = useState(false);
  let shortenedReview;
  let isLong = false;
  if (props.review.review.length > 180) {
    shortenedReview = `${props.review.review.slice(0, 180)}...`;
    isLong = true;
  }

  if (isLong && !(readMore)) {
    return (
      <div className="review">
        <div className="reviewTop">
          <div>
            <img src={props.review.photo_url} className="avatar" key={props.key} loading="lazy" />
          </div>
          <div>
            <div className="user">
              {props.review.customer_name}
            </div>
            <div className="date">
              {modifiedDate}
            </div>
          </div>
        </div>
        {shortenedReview}
        <button type="button" className="readMore" onClick={() => { selectRead(true); }}>read more</button>
      </div>
    );
  }
  return (
    <div className="review">
      <div className="reviewTop">
        <div>
          <img src={props.review.photo_url} className="avatar" key={props.key} />
        </div>
        <div>
          <div className="user">
            {props.review.customer_name}
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

export default Review;
