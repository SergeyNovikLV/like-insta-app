import React, { useState, useEffect } from 'react'
import {  Form, Button, Card } from 'react-bootstrap'
import { db } from '../../firebase'
import Posts from '../Posts/Posts'
import './home.scss'

function Home() {
  // those const reffer to props set in Posts component
  const [postTitle, setPostTitle] = useState('');
  const [postImgUrl, setPostImage] = useState('');
  const [posts, setPosts] = useState([])
 
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
    db.collection('posts').onSnapshot((snapshot) => 
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, [])

  
  return (
    <>
      <div className='home-container d-flex align-items-center flex-column justify-content-center'>
        <Card>
          <Card.Body>
              <h4 className='mb-4 justify-content-start'>New post</h4>
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
             
                <div className='d-flex justify-content-end mt-2'>
                    <Button 
                    onClick={sendPosts}
                      variant='primary'
                      >Create
                    </Button>
                  </div>
              </Form>
              </Card.Body>
            </Card>
           <Card className="post-card mt-4">
              <Card.Body> 
                 {posts.map((post) => (
                <Posts key={post.imgUrl}  title={post.title} imgUrl={post.imgUrl}  />
              )) }
              </Card.Body>
      
         </Card>
      </div>
    </>
  )
}

export default Home
