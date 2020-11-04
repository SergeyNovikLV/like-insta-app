import React, { useState } from 'react'
import {
  Navbar,
  NavDropdown,
  Nav,
  Button,
  Alert,
  Modal,
  Form
 } from 'react-bootstrap';
import { useHistory, Link } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import Logo from '../Icons/Logo'


import './navbar.scss'

function NavBar()  {
  const [error, setError] = useState('')
  const {currentUser, logout} = useAuth()
  const history = useHistory()
  const [postTitle, setPostTitle] = useState('');
  const [postImage, setPostImage] = useState('');
  // const [posts, setPosts] = useState([])

  const handleChange = (e) => {
    e.preventDefault();
    setPostTitle(e.target.value)
  };

  // const sendPost = (e) => {
  //   e.preventDefault()
  //   db.collection('posts').add({
  //     text: postTitle,
  //     image: postImage,
  //    });
  //    setPostTitle('');
  //    setPostImage('')
  // }

  async function handleLogout(){
    setError('')

    try {
      await logout()
      history.push('/signin')
    } catch {
      setError('Failed to log out')
     }
    }
 
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Navbar.Brand href="#home"> <Logo size={42} color="white" className="mr-md-3" />{' '}</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              {error && <Alert variant='danger'>{error}</Alert>}
              <Nav className="ml-auto">
              <Button variant="info" onClick={handleShow} className='post-btn'>
                Create New Post
              </Button>
                <NavDropdown title={(currentUser || {}).email} id="collasible-nav-dropdown">
                {/* <NavDropdown title='Sergy Nov' id="collasible-nav-dropdown"> */}
                <NavDropdown.Item> <Link to='/update-profile'>Update profile</Link></NavDropdown.Item>
                  <NavDropdown.Item onClick={handleLogout}>Sign Out</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              
            </Navbar.Collapse>
      </Navbar>

      <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
          <Modal.Title>New post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Choose file</Form.Label>
              <Form.Control 
                  onChange={(e) => setPostImage(e.target.value)}
                  value={postImage}
                  type='text' 
                  placeholder='File is not selected'/> 
                
              </Form.Group>
              <Form.Group>
                <Form.Label>Post title</Form.Label>
                <Form.Control 
                  onChange={handleChange} 
                  value={postTitle}
                  type='text' 
                  placeholder='Some title here'/> 
              </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Create
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
     
  );
}

export default NavBar
