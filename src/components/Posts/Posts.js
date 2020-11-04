import React from 'react'
import { Container, Card } from 'reactstrap'
import Image from '../Image/Image'
// import Comments from '../Comments/Comments'

function Posts({ title, imgUrl, postAuthor, postTag }) {
  return (
    <Container>
      <Card className="post-card mt-4">
       <div className='post-container'>
        <h4 className="post-title"> {title} </h4>
        <Image alt="butterfly" className="post-image" src={imgUrl} />
        <h5 className="post-author"> {postAuthor} </h5>
        <p className="post-tag">{postTag}</p>
        </div>
      </Card>
     </Container>
  )
}
export default Posts


