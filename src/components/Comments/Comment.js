import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import { db } from '../../firebase'
import { useAuth } from '../../contexts/AuthContext'

function Comment({ postId }) {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');
  const {currentUser} = useAuth()

    useEffect(() => {
    let unsubscribe;
    if (postId) {
      unsubscribe = db
      .collection('posts')
      .doc(postId)
      .collection('comments')
      .onSnapshot((snapshot) => { 
        setComments(snapshot.docs.map((doc) => doc.data()));
      });
    }

    return () => {
      unsubscribe();
    };
  }, [postId]);

  const postComment = (e) => {
    e.preventDefault()
    
    db.collection('posts').doc(postId).collection('comments').add({
      text: comment,
         
     });
     setComment('');
  }

  return (
    <div className="comment-container">
      <div className='comment-field' data-test='comment-field'>
      {comments.map((comment) => (
          <p><strong>{(currentUser || {}).email}</strong> {comment.text}</p>
          )) }
      </div>
        <Form>
          <Form.Group>
            <Form.Control 
                onChange={(e) => setComment(e.target.value)}
                value={comment}
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
    </div>
  )
}

export default Comment