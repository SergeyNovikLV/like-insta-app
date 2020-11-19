import React from 'react'
import { Card } from 'reactstrap'
import Image from '../Image/Image'
import './post.scss'
import Comment from '../Comments/Comment'
import PropsTypes  from 'prop-types'

function Posts({ title, imgUrl, imgAlt, postId }) {
  return (
    <div className='post-card'>
      <Card className="mt-4">
       <div className='post-container'>
        <h4 className='post-title' data-test='post-title'> {title} </h4>
          <Image src={imgUrl} className='post-image'  alt={imgAlt} />
        <div className='card-bottom'>
          <Comment postId={postId} />
        </div>
        </div>
       </Card>
     </div>
  )
}

Image.propTypes = {
  imgUrl: PropsTypes.string.isRequired,
}

Image.defaultProps = {
  imgUrl: "dummy.png",
  
};

export default Posts


