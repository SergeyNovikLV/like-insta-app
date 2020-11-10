import React, { useState, useEffect } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { db } from '../../firebase'
import Posts from '../Posts/Posts'

import './home.scss'

function Home() {
  // those const reffer to props set in Posts component
  const [posts, setPosts] = useState([])
  const [postTitle, setPostTitle] = useState('');
  const [postImgUrl, setPostImage] = useState('');
  
  const btnStyle = {
    position: 'absolute',
    top: '15px',
    right: '160px'
  };

  // create new posts functions
  const handleChange = (e) => {
    e.preventDefault();
    setPostTitle(e.target.value);
  
  };

  const sendPosts = (e) => {
    e.preventDefault()
    db.collection('posts').add({
      title: postTitle,
      imgUrl: postImgUrl,
     });
     setPostTitle('');
     setPostImage('');
  }

  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => { 
      setPosts(snapshot.docs.map(doc => ({
        id: doc.id, 
        post: doc.data()
      })));
    }) 
  }, []);


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log(posts)
  
  return (
    <>
      <div className='home-container d-flex align-items-center flex-column justify-content-center'>
        <div className="post-card mt-4">
            {posts.map(({id, post}) => (
              <Posts key={id}  postId={id} username='SN' title={post.title} imgUrl={post.imgUrl} />
            )) }
         </div> 
      </div>
     
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Write title</Form.Label>
              <Form.Control 
                onChange={handleChange}
                value={postTitle}
                type='text' 
                placeholder='Write post title'/> 
          </Form.Group> 
          <Form.Group>
            <Form.Label>Paste image url here</Form.Label>
              <Form.Control 
                onChange={(e) => setPostImage(e.target.value)}
                value={postImgUrl}
                type='text' 
                placeholder='File is not selected'/> 
          </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer>
        <div className='d-flex justify-content-end'>
            <Button 
              onClick={sendPosts}
                variant='primary'
                >Create
            </Button>
           </div>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <div style={btnStyle}>
       <Button variant="info" onClick={handleShow} className='modal-btn' >
        Create New Post
      </Button>
      </div>
    </>
  )
}

export default Home
