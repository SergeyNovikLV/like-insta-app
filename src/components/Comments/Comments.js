import React, { useState, useEffect } from 'react'
import { Card, Form, Button } from 'react-bootstrap'
import { db } from '../../firebase'
import Comment from './Comment'

import './comment.scss'

function Comments({author, comment}) {
  
  // const [commentAuthor, setCommentAuthor] = useState('');
  const [commentText, setCommentText] = useState('');
  const [posts, setPosts] = useState([])
  
  //create new comment function
  const postComment = (e) => {
    e.preventDefault()
    db.collection('posts').add({
      text: commentText,
      // author: commentAuthor
     });
    //  setCommentAuthor('');
     setCommentText('');
  }

  useEffect(() => {
    db.collection('posts').onSnapshot((snapshot) => 
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, [])
  
  return (
    <>
     <div className='comment-container'>
      <Card className="mt-4">
        {posts.map((comment, id) => (
            <Comment key={id}  text={comment.comment}  />
                )) } 
       </Card>
    </div>
      <Form>
        {/* <Form.Group>
          <Form.Label>Paste image url here</Form.Label>
            <Form.Control 
              onChange={(e) => setCommentAuthor(e.target.value)}
              value={commentAuthor}
              type='text' 
              placeholder='Comment authot'/> 
        </Form.Group> */}
        <Form.Group>
          
            <Form.Control 
              onChange={(e) => setCommentText(e.target.value)}
              value={commentText}
              type='text' 
              placeholder='Write a comment'/> 
        </Form.Group>
             
          <div className='d-flex justify-content-end mt-2'>
            <Button 
              onClick={postComment}
              variant='primary'
              >Submit
            </Button>
          </div>
      </Form>
   
    </>
  )
}
export default Comments