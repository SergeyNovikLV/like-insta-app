import React, { useState, useEffect } from 'react'
import { Container, Form, Button, Card } from 'react-bootstrap'
import { db } from '../../firebase'
import Posts from '../Posts/Posts'
import './home.scss'

function Home() {
  // those const reffer to props set in Posts compon
  const [postTitle, setPostTitle] = useState('');
  const [postImage, setPostImage] = useState('');
  const [postAuthor, setPostAuthor] = useState('');
  const [postTag, setPostTag] = useState('');
  const [posts, setPosts] = useState([])
 
  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => (
      setPosts(snapshot.docs.map(doc => doc.data()))
      ))
  }, [])

  const handleChange = (e) => {
    e.preventDefault();
    setPostTitle(e.target.value)
    setPostImage(e.target.value)
    setPostAuthor(e.target.value)
    setPostTag(e.target.value)
  };


  const sendPosts = (e) => {
    e.preventDefault()
    db.collection('posts').add({
      title: postTitle,
      imgUrl: postImage,
      postAuthor: postAuthor,
      postTag: postTag,
     });
     setPostTitle('');
     setPostImage('');
     setPostAuthor('');
     setPostTag('')
  }

  useEffect(() => {
    db.collection('posts').onSnapshot((snapshot) => 
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, [])

  return (
    <>
      <Container className='home-container'>
        <Card>
          <Card.Body>
              <h4 className='mb-4 justify-content-start'>New post</h4>
                <Form>
                  <Form.Group>
                  <Form.Label>Write title</Form.Label>
                     <Form.Control 
                       onChange={(e) => setPostTitle(e.target.value)}
                       value={setPostTitle}
                      type='text' 
                      placeholder='Write post title'/> 
                  </Form.Group> 
                 
                  <Form.Group>
                  <Form.Label>Paste image url here</Form.Label>
                     <Form.Control 
                      onChange={(e) => setPostImage(e.target.value)}
                      value={postImage}
                      type='text' 
                      placeholder='File is not selected'/> 
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Post author</Form.Label>
                    <Form.Control 
                      onChange={(e) => setPostAuthor(e.target.value)}
                      value={postAuthor}
                      type='text' 
                      placeholder='Set author'/>
                  </Form.Group> 
                  <Form.Group>
                  <Form.Label>Post tag</Form.Label>
                  <Form.Control 
                      onChange={(e) => setPostTag(e.target.value)}
                      value={postTag}
                      type='text' 
                      placeholder='Set tag'/> 
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
              {posts.map((post) => (
                <Posts key={post} title={post.title} imgUrl={post.imgUrl} postAuthor={post.postAuthor} postTag={post.postTag} />
              )) }
         </Card>
      </Container>
    </>
  )
}

export default Home
