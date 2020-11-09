import React from 'react'
import './comment.scss'

function Comment({ author, text }) {

  return (
    <div className="comment">
      <div className="comment__author">{author}</div>
      <div className="comment__text">{text}</div>
    </div>
  )
}

export default Comment