import React from 'react';
import './Faqs.css'
import image3 from '../images/Glow quester (1).png'
import Footer from '../FooterEnd/FooterEnd'

export default function TermsOfService() {
  return (
    <div className='Faqsbody'>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className='image-container'>
        <img src={image3} alt='Glow' className='full-width-image'></img>
      </div>
      <h1>Terms and Services</h1>
      <h2>1. Introduction</h2>
      <ol>
        <li>This website is owned and operated by [GlowQuester DermaCare Pvt. Ltd]. Throughout the site, 
            the terms “we”, “us” and “our” refer to [GlowQuester DermaCare Pvt. Ltd].  </li>
        <li>By visiting our site and/ or purchasing something from us, you engage in our “Service” and agree to be bound by the following terms and conditions (“Terms and Conditions”), 
            including those additional terms and conditions and policies referenced herein and/or available by hyperlink.</li>
        <li>We may need to update our Terms and Conditions from time to time, each time you place an order on 
            our website you will be agreeing to the latest version of our Terms and Conditions.</li>    
      </ol>
      <h2>2. About Us</h2>
      <ol>
        <li>Our registered office is at [19-FF, Street, 1. Phase IV, DHA, Karachi Sindh].
             Our principal place of business is located at [19-FF, Street, 1. Phase IV, DHA, Karachi Sindh].</li>
        <li>If you have any problems placing your order on our website, or require support after playing an order through our wesbite, 
        please contact us by calling us on [+92 000 0001] or send us an email on [support@fuzedskincare.com]</li>
      </ol>
      <br></br>
      <br></br>
      <Footer/>
    </div>
  );
}
