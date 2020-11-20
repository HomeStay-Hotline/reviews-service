import React from 'react';
import { shallow } from 'enzyme';
import Reviews from '../client/components/Reviews.jsx';
import Review from '../client/components/Review.jsx';

const sampleReviews = [];
for (let i = 0; i < 6; i++) {
  sampleReviews.push({
    user: `test${i}`,
    url: 'https://s3.amazonaws.com/uifaces/faces/twitter/iamjdeleon/128.jpg',
    review: `test${i}`,
    review_date: `test${i}`,
    cleanliness: i,
    communication: i,
    check_in: i,
    accuracy: i,
    location: i,
    value: i,
  });
}

test('should render 6 reviews', () => {
  const wrapper = shallow(<Reviews reviews={sampleReviews} />);
  expect(wrapper.find(Review)).toHaveLength(6);
});
