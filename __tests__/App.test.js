import React from 'react';
import { shallow, mount } from 'enzyme';
import axios from 'axios';
import App from '../client/components/App.jsx';
import Reviews from '../client/components/Reviews.jsx';
import Ratings from '../client/components/Ratings.jsx';

describe('Render App', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  test('should exist', () => {
    expect(wrapper.find('.mainView').exists()).toBeTruthy();
  });

  test('should render reviews', () => {
    expect(wrapper.containsMatchingElement(<Reviews />)).toEqual(true);
  });

  test('should render ratings', () => {
    expect(wrapper.containsMatchingElement(<Ratings />)).toEqual(true);
  });
});
