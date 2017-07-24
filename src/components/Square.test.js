import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Square from './Square';

it('renders Square without crashing', () => {
  shallow(<Square />);
});