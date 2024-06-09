import React from 'react'
import welcome from './images/cream jar.jpg'
import image2 from './images/image2.jpg'
import serum from './images/serum.jpg'
import pink_foam from './images/pink foam.jpg'
import swatches from './images/swatches.jpg'
import texture from './images/texture.jpg'
import './App.css'

export default function Description() {
    return (
        <div className='descriptionGrid'>
            <div className='text-section'>
                <p>Welcome to our skincare sanctuary, where radiant beauty meets conscious living. Dive into a world where skincare isn't just about looking good – it's about feeling good, inside and out.</p>
            </div>
            <div className='image-section'>
                <img src={welcome} alt=' '></img>
            </div>
            <div className='image-section'>
                <img src={image2} alt=' '></img>
            </div>
            <div className='text-section'>
                <p>With a vast array of products meticulously curated to cater to your every skincare need, we proudly serve customers around the globe. Whether you're in bustling city centers or tranquil countryside retreats, our products are just a click away, ready to nourish your skin wherever you may be.</p>
            </div>
            <div className='text-section'>
                <p>We believe in harnessing the power of nature to enhance your natural beauty. That's why each product in our collection is thoughtfully crafted using only the finest natural and organic ingredients. From lush botanical extracts to rejuvenating oils, every formulation is designed to pamper your skin while respecting the planet.</p>
            </div>
            <div className='image-section'>
                <img src={serum} alt=' '></img>
            </div>
            <div className='image-section'>
                <img src={pink_foam} alt=' '></img>
            </div>
            <div className='text-section'>
                <p>At the heart of our philosophy lies a commitment to simplicity. We believe in the power of minimalist formulations, stripping away unnecessary additives and focusing on what truly matters – effective, results-driven skincare. Our products are carefully curated to deliver maximum efficacy with minimal ingredients, allowing your skin to thrive without unnecessary complexity.</p>
            </div>
            <div className='text-section'>
                <p>Navigating the world of skincare can be daunting, which is why we're here to guide you every step of the way. Take our skin quiz to uncover your unique skin type and concerns, and let us suggest personalized product recommendations tailored to address your specific needs. Whether you're battling blemishes, seeking hydration, or craving a youthful glow, we've got you covered.</p>
            </div>
            <div className='image-section'>
                <img src={swatches} alt=' '></img>
            </div>
            <div className='image-section'>
                <img src={texture} alt=''></img>
            </div>
            <div className='text-section'>
                <p>But we don't just stop at recommendations – we believe in full transparency. Dive into the details of each product to discover exactly what goes into them and how they can help your skin. From soothing botanicals to powerful antioxidants, our ingredients work harmoniously to nourish, protect, and rejuvenate your skin, leaving you glowing with confidence.</p>
            </div>

        </div>
    )
}
