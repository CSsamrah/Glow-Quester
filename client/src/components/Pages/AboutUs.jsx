import React from "react";
import image5 from '../images/About.png'
import './AboutUs.css'
import Footer from '../FooterEnd/FooterEnd'

export default function AboutUs(){
    return(
        <div className="body">
<br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className='image-container'>
        <img src={image5} alt='Glow' className='full-width-image'></img>
      </div>
      <br></br>
      <p> Founded by Colette Laxton and Mark Curry in 2018, 
        The Glow Quester was born from a belief that better knowledge powers better decisions. We know that skincare, can be confusing. 
        But we also know that you want to understand more about your skin so you can make the right decisions.</p>
        <br></br><br></br>
        <p>That’s why we are in it with you! Whatever you want to know, however you want to know it, when it comes to finding out what’s best for your skin we’re here for you, whenever you need us. 
            Skincare is a journey and we are in it together</p><br></br>
           <Footer/>
        </div>
    );
}