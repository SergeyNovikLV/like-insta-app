import React from 'react'

export default function Comment(author, text) {
  return (
    <div>
      <div className="comment">
        <div className="comment__author">{author} </div>
        <div className="comment__text">{text}  </div>
    </div>
    </div>
  )
}
