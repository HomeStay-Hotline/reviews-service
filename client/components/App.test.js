import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App.jsx';

configure({ adapter: new Adapter() });

describe('A suite', () => {
  test('should render without throwing an error', () => {
    expect(shallow(<App />).contains(<div className="foo">Hello from app</div>)).toBe(true);
  });
});
