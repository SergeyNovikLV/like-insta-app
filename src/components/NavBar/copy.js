import React, { useState } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

import './navbar.scss'

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="primary" light expand="md">
        <NavbarBrand href="/">PhotoZ</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar className="justify-content-end">
          <Nav navbar className='myNavbar'>
            <NavItem>
              <NavLink href="/components/" className='btn modal-btn'>Create new post</NavLink>
            </NavItem>
          
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                SN
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Sign Out
                </DropdownItem>
               
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
         
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar
