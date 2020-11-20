import React from 'react';
import { shallow, mount } from 'enzyme';
import Search from '../client/components/Search.jsx';

const mockInput = (str) => ({
  target: {
    value: str,
  },
});

test('should call handleinput function on change', () => {
  const wrapper = shallow(<Search getSearch={() => {}} />);
  wrapper.find('.round').simulate('change', mockInput('a'));
  expect(wrapper.find('input').at(0).prop('value')).toBe('a');
});
