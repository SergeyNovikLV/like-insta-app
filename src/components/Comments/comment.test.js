import React from 'react';
import { shallow } from 'enzyme';
import Comment  from './Comment';
import { findByTestAttr } from './../../../utils/index'

const setUp = (props={}) => {
  const component = shallow(<Comment {...props} />);
  return component
};

describe('Test Comment component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });
  
  it('component should render without errors', () => {
    const wrapper = findByTestAttr(component, 'comment-field');
    expect(wrapper.length).toBe(1);
  });

});

// describe('Test Button component', () => {
//   it('Test click event', () => {
//     const mockCallBack = jest.fn();

//     const button = shallow((<Button onClick={mockCallBack}>Ok!</Button>));
//     button.find('button').simulate('click');
//     expect(mockCallBack.mock.calls.length).toEqual(1);
//   });
// });