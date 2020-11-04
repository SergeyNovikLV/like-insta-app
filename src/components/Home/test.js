// import React, { useState, useEffect } from 'react'
// import { Container, Form, Button, Card } from 'react-bootstrap'
// import db from '../../firebase'
// // import Posts from '../Posts/Posts'
// import './home.scss'

// function Home() {
  
//   // const [postTitle, setPostTitle] = useState('');
//   // const [postImage, setPostImage] = useState('');
//   // const [posts, setPosts] = useState([])
 
//   // useEffect(() => {
//   //   db.collection('posts').onSnapshot(snapshot => (
//   //     setPosts(snapshot.docs.map(doc => doc.data()))
//   //     ))
//   // }, [])

//   // const handleChange = (e) => {
//   //   e.preventDefault();
//   //   setPostTitle(e.target.value)
//   // };


//   // const sendPost = (e) => {
//   //   e.preventDefault()
//   //   db.collection('posts2').doc('post2data').add({
//   //     text: postTitle,
//   //     image: postImage,
//   //    });
//   //    setPostTitle('');
//   //    setPostImage('')
//   // }

//   // useEffect(() => {
//   //   db.collection('posts').onSnapshot((snapshot) => 
//   //     setPosts(snapshot.docs.map((doc) => doc.data()))
//   //   );
//   // }, [])

//   return (
//     <>
//       <Container className='home-container'>
//         <Card>
//           <Card.Body>
//               <h4 className='mb-4 justify-content-start'>New post</h4>
//                 <Form>
//                 <Form.Group>
//                   <Form.Label>Choose file</Form.Label>
//                      <Form.Control 
//                       onChange={(e) => setPostImage(e.target.value)}
//                       value={postImage}
//                       type='text' 
//                       placeholder='File is not selected'/> 
//                   </Form.Group>
//                   <Form.Group>
//                     <Form.Label>Post title</Form.Label>
//                     <Form.Control 
//                       onChange={handleChange} 
//                       value={postTitle}
//                       type='text' 
//                       placeholder='Some title here'/> 
//                   </Form.Group>
//                   <div className='d-flex justify-content-end mt-2'>
//                     <Button 
//                     onClick={sendPost}
//                       variant='primary'
//                       >Create
//                     </Button>
//                   </div>
//               </Form>
//               </Card.Body>
//             </Card>
//            <Card className="post-card mt-4">
//             <div className='post-container'>
              
//             </div>
            
//       </Card>
//       </Container>
//     </>
//   )
// }

// export default Home
