import React, { useState, useEffect } from 'react'
import {  Form, Button } from 'react-bootstrap'
import Comment from './Comment'
import { db } from '../../firebase'
import './comments.scss'

function Comments({postId, text, author}) {
  const [commentAuthor, setCommentAuthor] = useState('');
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState([])
  
  
  const handleChange = (e) => {
    e.preventDefault();
    setCommentText(e.target.value);
   };

   
  const sendComment = (e) => {
    e.preventDefault()
    db.collection('comments').add({
      author: commentAuthor,
      text: commentText,
      id: postId
     });
     setCommentAuthor('');
     setCommentText('');
  }

  useEffect(() => {
    let unsubscribe;
    if (postId) {
      const unsubscribe = db
      .collection('posts')
      .doc(postId)
      .collection('comments')
      .onSnapshot((snapshot) =>  {
    setComments(snapshot.docs.map((doc) => doc.data()));
      });
    }
      return () => {
        unsubscribe();
      };
    }, [postId]);

  

  return (
    <div>
      <div className='comment-field'>
        {comments.map((comment) => (
          <Comment key={comment.imgUrl}  author={comment.author} text={comment.text}  />
        )) }
        <p>Dummy comment</p>
      
      </div>
       <Form className='comment-input-container'>
          <Form.Group>
            <Form.Control 
                onChange={handleChange}
                value={commentText}
                type='text' 
                placeholder='Write a comment ...'/> 
            </Form.Group> 
              <div className='d-flex justify-content-end mt-2'>
                <Button 
                  onClick={sendComment}
                  variant='primary'
                  >Submit
                </Button>
              </div>
        </Form>
    </div>
  )
}
export default Comments

