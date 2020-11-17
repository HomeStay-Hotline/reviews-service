import React from 'react';
import { shallow } from 'enzyme';
import Reviews from '../client/components/Reviews.jsx';

describe('Render Reviews', () => {
  let wrapper;
  beforeEach(() => {
    const testArr = [];
    for (let i = 0; i < 6; i++) {
      testArr.push({
        user: 'test',
        url: 'https://s3.amazonaws.com/uifaces/faces/twitter/albertaugustin/128.jpg',
        review: 'test',
        review_date: 'test',
      });

    wrapper = shallow(<Reviews reviews={testArr} />);
  });

  test('should render 6 reviews', () => {
    expect(wrapper.children().length).toHaveLength(6);
  });
});
