import React from 'react'
import NavBar from '../NavBar/NavBar'
import Home from '../Home/Home'
import './dashboard.scss'

export default function Dashboard() {
  return (
    <>
     <div className='dashboard'>
        <NavBar data-test='navbar-component'/>
        <Home data-test='home-component'/>
      </div>
   </>
  )
}
