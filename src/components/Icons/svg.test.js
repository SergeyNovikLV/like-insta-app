import React from 'react'
import { shallow } from 'enzyme'
import Svg from './Svg'

describe('Svg', () => {

  it('renders without crashing', () => {
    const props = { className : 'test' };
    const wrapper = shallow(<Svg {...props} />);

    expect(wrapper.hasClass(props.className)).toEqual(true);

  });

  it('renders with children', () => {
   
    const wrapper = shallow(
    <Svg>
      <circle cx="50" cy="50" r="40" />
   </Svg>
   );

    expect(wrapper.children().length).toEqual(1);

  });

})
