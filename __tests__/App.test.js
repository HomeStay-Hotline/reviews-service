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

  jest.mock('axios', () => {
    const reviews = [
      {
        user: 'test',
        url: 'test',
        review: 'test',
        review_date: 'test',
        cleanliness: 0,
        communication: 0,
        check_in: 0,
        location: 0,
        value: 0,
        accuracy: 0,
      },
    ];

    return {
      get: jest.fn(() => Promise.resolve(reviews)),
    };
  });

  test('should exist', () => {
    expect(wrapper).toBeTruthy();
  });

  test('should render reviews', () => {
    const mock = jest.fn();
    wrapper.instance().getReviews = mock;
    wrapper.instance().forceUpdate();
    wrapper.instance().componentDidMount();
    expect(mock).toHaveBeenCalled();
  });
});
