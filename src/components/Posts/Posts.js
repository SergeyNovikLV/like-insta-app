import React from 'react'
import { Card } from 'reactstrap'
import Image from '../Image/Image'
import './post.scss'
import Comments from '../Comments/Comments'

function Posts({ title, imgUrl, imgAlt}) {
  return (
    <div className='post-card'>
      <Card className="mt-4">
       <div className='post-container'>
        <h4 className="post-title"> {title} </h4>
        <Image src={imgUrl} className="post-image"  alt={imgAlt} />
        <div className='card-bottom'>
          <Comments postId={1234}/>
        </div>
        </div>
       </Card>
     </div>
  )
}
export default Posts


