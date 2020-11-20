import React from 'react';
import { shallow } from 'enzyme';
import Review from '../client/components/Review.jsx';

const sampleReview = {
  user: 'test',
  review: 'test',
  review_date: 'test',
  url: 'https://s3.amazonaws.com/uifaces/faces/twitter/iamjdeleon/128.jpg',
  cleanliness: 1,
  communication: 1,
  check_in: 1,
  accuracy: 1,
  location: 1,
  value: 1,
};

const sampleLongReview = {
  user: 'test',
  review: 'Repudiandae illo delectus perferendis iure sunt atque in aliquid. Quibusdam aut harum repudiandae. Nihil ut ab esse tempora consequuntur labore. Blanditiis rerum aut. Rem eligendi consequatur reprehenderit ut officiis.',
  review_date: 'test',
  url: 'https://s3.amazonaws.com/uifaces/faces/twitter/iamjdeleon/128.jpg',
  cleanliness: 1,
  communication: 1,
  check_in: 1,
  accuracy: 1,
  location: 1,
  value: 1,
};

test('renders a review', () => {
  const wrapper = shallow(<Review review={sampleReview} />);
  expect(wrapper.find('.user')).toHaveLength(1);
});

test('properly truncates and renders a long review', () => {
  const wrapper = shallow(<Review review={sampleLongReview} />);
  expect(wrapper.find('.readMore')).toHaveLength(1);
});
