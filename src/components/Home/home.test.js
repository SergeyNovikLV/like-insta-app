import React from 'react'
import { shallow } from 'enzyme'
import Modal from '../Modal/Modals'

describe('Modal Component', () => {

  it('Modal should render without errors', () => {
    const component = shallow(<Modal />);
    const modal = component.find('.create-post-modal');
    expect(modal.length).toBe(1)
  }) 
})