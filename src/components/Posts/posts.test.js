import React from 'react';
import { shallow } from 'enzyme';
import Posts  from './Posts';
import Image  from './../Image/Image';
// import { findByTestAttr } from './../../../utils/index'

const setUp = (props={}) => {
  const component = shallow(<Posts {...props} />);
  return component
};

describe('Test Posts component', () => {
 
  const postId = 1;
  let component;
  
  beforeEach(() => {
    component = setUp({postId});
  });
  
  it('Comment component should render', () => {
    const wrapper = component.find({postId});
    expect(wrapper.find('Comment').props().postId).toEqual(postId);
  });

  it("render image component with default value", () => {
    const wrapper = shallow(<Image />);
    expect(wrapper).toBeTruthy();
    
  });

  it("render image component with props", () => {
    const props = {
      imgUrl: "facebook.png",
    };
    const wrapper = shallow(<Image {...props} />);
    expect(wrapper).toBeTruthy();
   
  });
});