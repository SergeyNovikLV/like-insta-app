// import React, { useState, useEffect } from 'react'
// import {  Form, Button, Card } from 'react-bootstrap'
// import { db } from '../../firebase'
// import Posts from '../Posts/Posts'
// import './home.scss'

// function Home() {
//   // those const reffer to props set in Posts compon
//   const [postTitle, setPostTitle] = useState('');
//   const [postImgUrl, setPostImage] = useState('');
//   const [postImgAlt, setImgAlt] = useState('');
//   const [postAuthor, setPostAuthor] = useState('');
//   const [postTag, setPostTag] = useState('');
//   const [posts, setPosts] = useState([])
 
  

//   const handleChange = (e) => {
//     e.preventDefault();
//     setPostTitle(e.target.value);
  
//   };


//   const sendPosts = (e) => {
//     e.preventDefault()
//     db.collection('posts').add({
//       title: postTitle,
//       imgUrl: postImgUrl,
//       imgAlt: postImgAlt,
//       author: postAuthor,
//       tag: postTag,
//      });
//      setPostTitle('');
//      setPostImage('');
//      setImgAlt('');
//      setPostAuthor('');
//      setPostTag('')
//   }

//   useEffect(() => {
//     db.collection('posts').onSnapshot((snapshot) => 
//       setPosts(snapshot.docs.map((doc) => doc.data()))
//     );
//   }, [])

//   return (
//     <>
//       <div className='home-container d-flex align-items-center flex-column justify-content-center'>
//         <Card>
//           <Card.Body>
//               <h4 className='mb-4 justify-content-start'>New post</h4>
//                 <Form>
//                   <Form.Group>
//                   <Form.Label>Write title</Form.Label>
//                      <Form.Control 
//                         onChange={handleChange}
//                        value={postTitle}
//                       type='text' 
//                       placeholder='Write post title'/> 
//                   </Form.Group> 
                 
//                   <Form.Group>
//                   <Form.Label>Paste image url here</Form.Label>
//                      <Form.Control 
//                       onChange={(e) => setPostImage(e.target.value)}
//                       value={postImgUrl}
//                       type='text' 
//                       placeholder='File is not selected'/> 
//                   </Form.Group>
//                   <Form.Group>
//                   <Form.Label>Paste image url here</Form.Label>
//                      <Form.Control 
//                       onChange={(e) => setImgAlt(e.target.value)}
//                       value={postImgAlt}
//                       type='text' 
//                       placeholder='Alt'/> 
//                   </Form.Group>
//                   <Form.Group>
//                     <Form.Label>Post author</Form.Label>
//                     <Form.Control 
//                       onChange={(e) => setPostAuthor(e.target.value)}
//                       value={postAuthor}
//                       type='text' 
//                       placeholder='Set author'/>
//                   </Form.Group> 
//                   <Form.Group>
//                   <Form.Label>Post tag</Form.Label>
//                   <Form.Control 
//                       onChange={(e) => setPostTag(e.target.value)}
//                       value={postTag}
//                       type='text' 
//                       placeholder='Set tag'/> 
//                   </Form.Group>
//                   <div className='d-flex justify-content-end mt-2'>
//                     <Button 
//                     onClick={sendPosts}
//                       variant='primary'
//                       >Create
//                     </Button>
//                   </div>
//               </Form>
//               </Card.Body>
//             </Card>
//            <Card className="post-card mt-4">
//               {posts.map((post) => (
//                 <Posts key={post.imgUrl} post={post}  title={post.title} imgUrl={post.imgUrl} imgAlt={post.imgAlt} author={post.author} tag={post.tag} />
//               )) }
//          </Card>
//       </div>
//     </>
//   )
// }

// export default Home
