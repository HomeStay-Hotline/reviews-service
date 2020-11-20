import React from 'react';
import { shallow } from 'enzyme';
import Ratings from '../client/components/Ratings.jsx';

// const sampleReviews = [];
// for (let i = 0; i < 6; i++) {
//   sampleReviews.push({
//     user: `test${i}`,
//     url: 'https://s3.amazonaws.com/uifaces/faces/twitter/iamjdeleon/128.jpg',
//     review: `test${i}`,
//     review_date: `test${i}`,
//     cleanliness: i,
//     communication: i,
//     check_in: i,
//     accuracy: i,
//     location: i,
//     value: i,
//   });
// }

const sampleRatings = [1, 2, 3, 4, 5, 6, 0];
const sampleTotal = 5;

describe('Ratings', () => {
  test('renders 6 ratings', () => {
    const wrapper = shallow(<Ratings ratings={sampleRatings} totalReviews={sampleTotal} />);
    expect(wrapper.find('.rating')).toHaveLength(6);
  });


});
