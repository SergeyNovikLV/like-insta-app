import React, { useState, useEffect } from 'react'
import {  Form, Button, Card } from 'react-bootstrap'
import { db } from '../../firebase'
import Posts from '../Posts/Posts'
// import { ModalContext } from "../../contexts/context";
import './home.scss'

function Home() {
 
  const [postTitle, setPostTitle] = useState('');
  const [postImgUrl, setPostImage] = useState('');
  const [postImgAlt, setImgAlt] = useState('');
  const [postAuthor, setPostAuthor] = useState('');
  const [postTag, setPostTag] = useState('');
  const [posts, setPosts] = useState([])
 
  

  const handleChange = (e) => {
    e.preventDefault();
    setPostTitle(e.target.value);
  
  };


  const sendPosts = (e) => {
    e.preventDefault()
    db.collection('posts').add({
      title: postTitle,
      imgUrl: postImgUrl,
      imgAlt: postImgAlt,
      author: postAuthor,
      tag: postTag,
     });
     setPostTitle('');
     setPostImage('');
     setImgAlt('');
     setPostAuthor('');
     setPostTag('')
  }

  useEffect(() => {
    db.collection('posts').onSnapshot((snapshot) => 
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, [])

  // let { handleModal } = React.useContext(ModalContext);

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
                  <Form.Group>
                  <Form.Label>Paste image url here</Form.Label>
                     <Form.Control 
                      onChange={(e) => setImgAlt(e.target.value)}
                      value={postImgAlt}
                      type='text' 
                      placeholder='Alt'/> 
                  </Form.Group>
               <div className='d-flex justify-contengit ct-end mt-2'>
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
                <Posts key={post.imgUrl} post={post}  title={post.title} imgUrl={post.imgUrl}  />
              )) }
              
         </Card> 
      </div>
      {/* <button
        className="mt-6 rounded  bg-purple-700 text-purple-100 px-5 h-12"
        onClick={() => handleModal("This is component modal content")}
      >
        open this modal!
      </button> */}
      
    </>
  )
}

export default Home
