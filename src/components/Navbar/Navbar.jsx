import React from 'react'
import CardContainer from '../Homecomp/CardContainer'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <div className="upper">
        <p className='name'>Mayilsamy</p>
        <span className='image-box'><img className='image' src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" /></span>
      </div>
      <div className="lower">
        <div className="text active-nav">
          My Projects <span className='actice-nav-span'>(13)</span> 
        </div>
        <div className="text">
          Explore
        </div>
        <div className="search">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input className='input' type="text" placeholder="Search Projects" />
        </div>
      </div>
      <hr className='hr'/>
      <hr className="hr2" />
      <CardContainer/>
    </div>
  )
}

export default Navbar