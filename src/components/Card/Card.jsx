import React from 'react'
import './card.css'
import oyo from '../../images/oyo.png'
const Card = () => {
  return (
    <div className="card-container">
    <div className='card'>
      <div className="sec-1">
        <img className='image-logo' src={oyo} alt="" />
        <span className='card-name'>OYO</span>
        <button className='button'>Submit Work</button>
      </div>
      <div className="sec-2">
        Diwali campaign
      </div>
      <div className="sec-3">
        <div className="para">This is a campaign to create a stunning video from the boutique......</div>
        <div className="cost">
          <span className='symbol'>₹&#160;</span><p className="price">2500</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Card