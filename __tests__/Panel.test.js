import React from 'react';
import { shallow } from 'enzyme';
import Panel from '../client/components/Panel.jsx';

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
const sampleRatings = [1, 2, 3, 4, 5, 6, 0];

test('should show the modal when the button has been clicked', () => {
  const wrapper = shallow(<Panel reviews={sampleReviews} ratings={sampleRatings} />);
  wrapper.find('.seeAll').simulate('click');
  expect(wrapper.find('.modal').display).toBe('block');
});
