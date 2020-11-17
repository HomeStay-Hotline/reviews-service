import React from 'react';
import { shallow } from 'enzyme';
import Review from '../client/components/Review.jsx';

describe('Render A Review', () => {
  let wrapper;
  beforeEach(() => {
    const exampleReview = {
      user: 'test',
      url: 'https://s3.amazonaws.com/uifaces/faces/twitter/albertaugustin/128.jpg',
      review: 'test',
      review_date: 'test',
    };
    wrapper = shallow(<Review review={exampleReview} />);
  });

  test('should render without throwing an error', () => {
    expect(wrapper.find('div').text()).toContain('test');
  });

  test('should have one image', () => {
    expect(wrapper.find('img')).toHaveLength(1);
  });
});
