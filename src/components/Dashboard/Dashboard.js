import React from 'react'
import NavBar from '../NavBar/NavBar'
import Home from '../Home/Home'
import './dashboard.scss'
// import UploadPost from '../UploadPost/UploadPost'
// import Modal from '../Modal/Modal'

import Posts from '../Posts/Posts'

export default function Dashboard() {
  return (
    <>
     <div className='dashboard'>
        <NavBar />
        <Home />
        <Posts />
      </div>
   </>
  )
}
