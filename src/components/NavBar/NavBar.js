import React, { useState } from 'react'
import {
  Navbar,
  NavDropdown,
  Nav,
  Alert,

 } from 'react-bootstrap';
import { useHistory, Link } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import Logo from '../Icons/Logo'


import './navbar.scss'

function NavBar()  {
  const [error, setError] = useState('')
  const {currentUser, logout} = useAuth()
  const history = useHistory()
 
  async function handleLogout(){
    setError('')

    try {
      await logout()
      history.push('/signin')
    } catch {
      setError('Failed to log out')
     }
    }
 
  
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Navbar.Brand href="#home"> <Logo size={42} color="white" className="mr-md-3" />{' '}</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              {error && <Alert variant='danger'>{error}</Alert>}
              <Nav className="ml-auto">
              {/* <Button variant="info" onClick={handleShow} className='post-btn'>
                Create New Post
              </Button> */}
                <NavDropdown title={(currentUser || {}).email} id="collasible-nav-dropdown">
                {/* <NavDropdown title='Sergy Nov' id="collasible-nav-dropdown"> */}
                <NavDropdown.Item> <Link to='/update-profile'>Update profile</Link></NavDropdown.Item>
                  <NavDropdown.Item onClick={handleLogout}>Sign Out</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              
            </Navbar.Collapse>
      </Navbar>

    </div>
     
  );
}

export default NavBar
