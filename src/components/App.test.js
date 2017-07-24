import React from 'react';
import ReactDOM from 'react-dom';
import {mount, shallow} from 'enzyme';
import App from './App';

describe('<App />', () => {
  const mountWrapper = mount(<App/>);
  const newWrapper = new App();
  const wrapper = shallow(<App />);

  /* Component render */
  it('renders App without crashing', () => { 
    shallow(<App />);
  });

  /* Components */
  it('expect app to have the Board component', () => {  
    expect(wrapper.find('<Board />')).toBeTruthy();
  });
  it('expect app to have the Square component', () => {  
    expect(wrapper.find('<Square />')).toBeTruthy();
  });
  it('expect app to have the Button component', () => {   
    expect(wrapper.find('<Button />')).toBeTruthy();
  });

  /* Init */
  it('Expect steps to be 0 on init', () => {   
    expect(newWrapper.state.stepNumber).toEqual(0);
  });
  it('Expect xIsNext to be true on init', () => {
    expect(newWrapper.state.xIsNext).toBeTruthy();
  });

  it('Expect history of squares to be null on init', () => {    
    expect(newWrapper.state.history.length).toEqual(1);
  });

  /* handleClick function */  
  it('Expect on calling handleClick stepNumber will change', () => {
    const wrapper = shallow(<App />);
    const realComponentInstance = wrapper.instance();
    expect(realComponentInstance.state.stepNumber).toEqual(0);
      
    realComponentInstance.handleClick(1);
    wrapper.update();

    expect(realComponentInstance.state.stepNumber).toEqual(1);
  });

  it('Expect on calling handleClick xIsNext will change', () => {
    const wrapper = shallow(<App />);    
    const realComponentInstance = wrapper.instance();

    expect(realComponentInstance.state.xIsNext).toBeTruthy();
      
    realComponentInstance.handleClick(1);
    wrapper.update();

    expect(realComponentInstance.state.xIsNext).toBeFalsy();
  });

  it('Expect on calling handleClick xIsNext will change', () => {
    const wrapper = shallow(<App />);    
    const realComponentInstance = wrapper.instance();

    expect(realComponentInstance.state.history.length).toEqual(1);
      
    realComponentInstance.handleClick(1);
    wrapper.update();

    expect(realComponentInstance.state.history.length).toEqual(2);  
  });

  /* jumpTo function */
});