import React from 'react'
import image1 from './images/flask.png'
import image2 from './images/vegan.png'
import image3 from './images/ecofriendly.png'
import image4 from './images/bottle.png'
import './App.css';

export default function Properties() {
  return (
    <div className='specialSection'>
        <h2>What Makes Our Skincare <span >Truly Special</span></h2>
        <div className='specialComponent'>
            <div className='specialItem'>
                <img src={image1}  width={120} height={120} alt='minimalist'>
                </img>
                <p>Minimalist Formulations</p>
            </div>
            <div className='specialItem'>
                <img src={image2}  width={120} height={140} alt='Vegan'>
                </img>
                <p>Vegan</p>
            </div>
            <div className='specialItem'>
                <img src={image3}  width={120} height={140} alt='ecofriendly'>
                </img>
                <p>Eco Friendly</p>
            </div>
            <div className='specialItem'>
                <img src={image4}  width={120} height={120} alt='natural'>
                </img>
                <p>Natural and Organic</p>
            </div>

        </div>

    </div>
  )
}
