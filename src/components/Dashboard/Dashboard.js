import React from 'react'
import NavBar from '../NavBar/NavBar'
import Home from '../Home/Home'
import './dashboard.scss'
// import UploadPost from '../UploadPost/UploadPost'
// import Modal from '../Modal/Modal'


export default function Dashboard() {
  return (
    <>
     <div className='dashboard'>
        <NavBar />
        <Home />
        
      </div>
   </>
  )
}
