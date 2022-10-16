import React from 'react'
import CardContainer from '../../components/Homecomp/CardContainer'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import './home.css'

const Home = () => {
  return (<>
    <div className='home'>
        {/* <div className="sidebar">
            <Sidebar/>
        </div>
        <div className="navbar">
            <Navbar/>
        </div>
        <div className="cardSection">

        </div> */}
        <Sidebar/>
        <Navbar/>
    </div>
    {/* <CardContainer/> */}
    </>
  )
}

export default Home