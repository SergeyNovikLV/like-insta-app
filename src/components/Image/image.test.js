import React from 'react'
import { shallow } from 'enzyme'
import Image from './Image'

describe('Image Component', () => {
  it('Component should render without errors', () => {
    const component = shallow(<Image />);
    const wrapper = component.find('.image');
    expect(wrapper.length).toBe(1)
  }) 
})

