import React from 'react'
import { shallow } from 'enzyme'
import Logo from './Logo'

describe('Logo', () => {

  it('renders without crashing', () => {
    const props = { className : 'test' };
    const wrapper = shallow(<Logo {...props} />);

    expect(wrapper.hasClass(props.className)).toEqual(true);

  });

  it('renders with children', () => {
   
    const wrapper = shallow(
    <Logo>
      <circle cx="50" cy="50" r="40" />
   </Logo>
   );

    expect(wrapper.children().length).toEqual(1);

  });

})
