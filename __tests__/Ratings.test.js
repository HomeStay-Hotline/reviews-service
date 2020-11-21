import React from 'react';
import { shallow } from 'enzyme';
import Ratings from '../client/components/Ratings.jsx';

const sampleRatings = [1, 2, 3, 4, 5, 6, 0];

describe('Ratings', () => {
  test('renders 6 ratings', () => {
    const wrapper = shallow(<Ratings ratings={sampleRatings} />);
    expect(wrapper.find('.rating')).toHaveLength(6);
  });
});
