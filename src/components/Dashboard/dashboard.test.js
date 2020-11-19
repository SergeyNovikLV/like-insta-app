import React from 'react';
import { shallow } from 'enzyme';
import Dashboard  from './Dashboard';
import { findByTestAttr } from './../../../utils/index'

const setUp = (props={}) => {
  const component = shallow(<Dashboard {...props} />);
  return component
};

describe('Test Dashboard component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });
  
  it('Navbar component should render without errors', () => {
    const wrapper = findByTestAttr(component, 'navbar-component');
    expect(wrapper.length).toBe(1);
  });

  it('Home component should render without errors', () => {
    const wrapper = findByTestAttr(component, 'home-component');
    expect(wrapper.length).toBe(1);
  });

});