import React from 'react'
import international from './images/internationalization.png'
import support from './images/support.png'
import exchange from './images/exchange.png'
import location from './images/map-location.png'
import cream from './images/cream.png'
import derm from './images/medical.png'
import satisfied from './images/satisfied.png'


export default function Services() {
    return (
        <div className="services-container">
      <h2>WE PROVIDE...</h2>
      <div className="services">
        <div className="service">
            <img src={international} alt=''></img>
          <div>
          <h3>Internationalization</h3>
          <p>Offer multi-currency pricing and international shipping options to cater to international customers</p></div>
        </div>
        <div className="service">
        <img src={exchange} alt=''></img>
          <div>
          <h3>Returns and Exchanges</h3>
          <p>Provide a hassle-free returns and exchanges process within a week</p></div>
        </div>
        <div className="service">
        <img src={support} alt=''></img>
          <div>
          <h3>Offer 24/7 Support</h3>
          <p>Offer real-time assistance to customers 24 hours a day</p></div>
        </div>
      </div>
      <h1>ACHIEVEMENTS</h1>
      <div className="achievement-container">
        <div className='achievements'>
            <img src={location} width={80} alt=''></img>
            <span>200 +</span>
            <p>Serving Customers Across 200+ Locations</p>
        </div>
        <div className='achievements'>
            <img src={cream} width={80} alt=''></img>
            <span>200</span>
            <p>Showcasing Over 200 Organic Products</p>
        </div>
        <div className='achievements'>
            <img src={derm} width={80} alt=''></img>
            <span>370</span>
            <p>Backed by a Team of 370 Dermatologists</p>
        </div>
        <div className='achievements'>
            <img src={satisfied} width={80} alt=''></img>
            <span>32 K</span>
            <p>Thriving Community of 32,000 Satisfied Customers</p>
        </div>
      </div>
    </div>

    )
}
