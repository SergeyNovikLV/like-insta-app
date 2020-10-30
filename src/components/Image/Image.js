import React from 'react'
import classNames from 'classnames'
import './image.css'

function Image({ src, alt, className }) {
  return <img src={src} alt={alt} className={classNames('image', className)} />
}
export default Image
