import React from 'react'
import { shallow }from 'enzyme'
import NavBar from './NavBar'

const setUp = (props={}) => {
  const component = shallow(<NavBar {...props} />);
  return component;
};

const findTestAttr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
}

describe('Nav Component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });
 
  it('Component should render without errors', () => {
    const wrapper = findTestAttr(component, '.app-navbar');
    expect(wrapper.length).toBe(1);
  });

  // it('Logo component should render without errors', () => {
  //   const logo = findTestAttr(component, 'rightNav');
  //   expect(logo.length).toBe(1);
  // });
});