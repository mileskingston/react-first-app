import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Button from './Button';

it('renders Button without crashing', () => {
  shallow(<Button />);
});