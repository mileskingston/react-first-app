import React from 'react';
import ReactDOM from 'react-dom';
import {mount, shallow} from 'enzyme';
import App from './App';

describe('<App />', () => {
  const mountWrapper = mount(<App/>);
  const newWrapper = new App();
  const wrapper = shallow(<App />);
  const myArray = [0,2,5,9];
  
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

  it('Expect history state to be 1 on init', () => {    
    expect(newWrapper.state.history.length).toEqual(1);
  });

  /* handleClick function */  
  it('On calling handleClick stepNumber will change', () => {
    const wrapper = shallow(<App />);
    const realComponentInstance = wrapper.instance();
    expect(realComponentInstance.state.stepNumber).toEqual(0);
      
    realComponentInstance.handleClick(1);
    wrapper.update();
    expect(realComponentInstance.state.stepNumber).toEqual(1);
  });

  it('On calling handleClick xIsNext will change', () => {
    const wrapper = shallow(<App />);    
    const realComponentInstance = wrapper.instance();

    expect(realComponentInstance.state.xIsNext).toBeTruthy();
      
    realComponentInstance.handleClick(1);
    wrapper.update();
    expect(realComponentInstance.state.xIsNext).toBeFalsy();
  });

  it('On calling handleClick history will change', () => {
    const wrapper = shallow(<App />);    
    const realComponentInstance = wrapper.instance();

    expect(realComponentInstance.state.history.length).toEqual(1);
      
    realComponentInstance.handleClick(1);
    wrapper.update();
    expect(realComponentInstance.state.history.length).toEqual(2);  
  });

  /* jumpTo function */

  it('On calling jumpTo step one stepNumber will reset', () => {
    const wrapper = shallow(<App />);    
    const realComponentInstance = wrapper.instance();

    realComponentInstance.handleClick(1);
    wrapper.update();
    expect(realComponentInstance.state.stepNumber).toEqual(1);

    realComponentInstance.jumpTo(0);
    wrapper.update();
    expect(realComponentInstance.state.stepNumber).toEqual(0);  
  });  

  it('On calling jumpTo step one xIsNext will reset', () => {
    const wrapper = shallow(<App />);    
    const realComponentInstance = wrapper.instance();

    realComponentInstance.handleClick(1);
    wrapper.update();
    expect(realComponentInstance.state.xIsNext).toBeFalsy();

    realComponentInstance.jumpTo(0);
    wrapper.update();
    expect(realComponentInstance.state.xIsNext).toBeTruthy();  
  });  
  
  it('On calling jumpTo step one the history will reset', () => {
    const wrapper = shallow(<App />);    
    const realComponentInstance = wrapper.instance();

    realComponentInstance.handleClick(1);
    wrapper.update();
    expect(realComponentInstance.state.history.length).toEqual(2);

    realComponentInstance.jumpTo(0);
    wrapper.update();
    expect(realComponentInstance.state.history.length).toEqual(1);  
  });  

  it('On calling jumpTo step three will change stepNumber', () => {
    const wrapper = shallow(<App />);    
    const realComponentInstance = wrapper.instance();

    for (let value of myArray) {
      realComponentInstance.handleClick(value);
    }
    wrapper.update();
    expect(realComponentInstance.state.stepNumber).toEqual(4);

    realComponentInstance.jumpTo(3);
    wrapper.update();   
    expect(realComponentInstance.state.stepNumber).toEqual(3);
  });  

  it('On calling jumpTo step three will change xIsNext', () => {
    const wrapper = shallow(<App />);    
    const realComponentInstance = wrapper.instance();

    for (let value of myArray) {
      realComponentInstance.handleClick(value);
    }
    wrapper.update();
    expect(realComponentInstance.state.xIsNext).toBeTruthy();

    realComponentInstance.jumpTo(3);
    wrapper.update();
    expect(realComponentInstance.state.xIsNext).toBeFalsy();  
  });

  /* Reset data function */

  it('On calling jumpTo stepNumber will equal 1', () => {
    const wrapper = shallow(<App />);    
    const realComponentInstance = wrapper.instance();

    for (let value of myArray) {
      realComponentInstance.handleClick(value);
    }
    wrapper.update();
    expect(realComponentInstance.state.stepNumber).toEqual(4);

    realComponentInstance.resetData();
    wrapper.update();   
    expect(realComponentInstance.state.stepNumber).toEqual(0);
  });  

  it('On calling resetData xIsNext will be true', () => {
    const wrapper = shallow(<App />);    
    const realComponentInstance = wrapper.instance();

    for (let value of myArray) {
      realComponentInstance.handleClick(value);
    }
    wrapper.update();
    expect(realComponentInstance.state.xIsNext).toBeTruthy();

    realComponentInstance.resetData();
    wrapper.update();
    expect(realComponentInstance.state.xIsNext).toBeTruthy();  
  });

  it('On calling resetData history will equal one', () => {
    const wrapper = shallow(<App />);    
    const realComponentInstance = wrapper.instance();

    for (let value of myArray) {
      realComponentInstance.handleClick(value);
    }
    wrapper.update();
    expect(realComponentInstance.state.history.length).toEqual(5);

    realComponentInstance.resetData();
    wrapper.update();
    expect(realComponentInstance.state.history.length).toEqual(1);  
  });  
});