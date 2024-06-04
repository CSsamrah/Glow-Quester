import React from 'react'
import serum from '../images/orange serum.png' 
import pink_drink from '../images/pink drink.png'
import green_cream from '../images/green cream.png'
import cleanser from '../images/cleanser.png'
import cleansing_cream from '../images/cleansing cream.png'
import kylie from '../images/kylie skin.png'
import gel_cream from '../images/gel cream.png'
import vitamin_C from '../images/vitamin c.png'

export default function TopPicks() {
  return (
    <div className='topPicks'>
    <div>
        <h2>Our Finest Picks</h2>
        <h3>Let’s Take A Glimpse into Our Skincare Collection</h3>
    </div>
    <div className='top_items'>
        <div className='top_image'>
            <img src={serum}></img>
        </div>
        <div className='top_image'>
            <img src={pink_drink}></img>
        </div>
        <div className='top_image'>
            <img src={green_cream}></img>
        </div>
        <div className='top_image'>
            <img src={cleansing_cream}></img>
        </div>
        <div className='top_image'>
            <img src={cleanser}></img>
        </div>
        <div className='top_image'>
            <img src={gel_cream}></img>
        </div>
        <div className='top_image'>
            <img src={kylie}></img>
        </div>
        <div className='top_image'>
            <img src={vitamin_C}></img>
        </div>

    </div>
    <button className='mainbutton'>Shop More </button>
    </div>
  )
}
