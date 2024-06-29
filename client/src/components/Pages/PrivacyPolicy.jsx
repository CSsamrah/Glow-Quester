import React from 'react';
import './PrivacyPolicy.css'
import image3 from '../images/Glow quester (1).png'
import Footer from '../FooterEnd/FooterEnd'

export default function TermsOfService() {
  return (
    <div className='body'>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className='image-container'>
        <img src={image3} alt='Glow' className='full-width-image'></img>
      </div>
      <h1>Privacy Policy</h1>
      <p>This Privacy Policy describes how GlowQuester-skincare.myshopify.com
         (the “Site” or “we”) collects, uses, and discloses your Personal Information 
         when you visit or make a purchase from the Site.</p>
      <h2>Contact</h2>
      <p>After reviewing this policy, if you have additional questions, 
        want more information about our privacy practices, or would like to make a complaint,
         please contact us by e-mail at info@fuzedskincare.com or by mail using the details provided below:</p><br></br>
        <p>GlowQuester Skincare, Karachi, Sindh 54000, Pakistan</p>
        <h2>Collecting Personal Information</h2>
        <p>When you visit the Site, we collect certain information about your device, your interaction with the Site, and information necessary to process your purchases. We may also collect additional information if you contact us for customer support. In this Privacy Policy, we refer to any information about an identifiable individual (including the information below) as “Personal Information”.See the list below for more information about what Personal Information we collect and why.</p>
        <ol>
            <li>Device Information</li>
            <ul>
                <li> Purpose of collection is to load the Site accurately for you, and to perform analytics 
                    on Site usage to optimize our Site</li>
                <li>Collected automatically
                 when you access our Site using cookies, log files, web beacons, tags, or pixels</li>
                 <li>Disclosure for a business purpose is shared with our processor Shopify</li>
            </ul>  
            <li>Order Information</li>
            <ul>
                <li>Purpose of collection is to provide products or services to you to fulfill our contract, to process your payment information, arrange for shipping, and provide you with invoices and/or order confirmations, communicate with you, screen our orders for potential risk or fraud, and when in line with
                     the preferences you have shared with us, provide you with information or advertising relating to our products or services.</li>
                <li>Source of collection is collected from you. </li>
                <li>Personal Information collected includes name, billing address,
                     shipping address, payment information (including credit card numbers, email address, and phone number).</li>

            </ul>
        </ol> 
        <h2>Minors</h2>
        <p>The Site is not intended for individuals under the age of 16. We do not intentionally collect Personal Information from children. If you are the parent or guardian 
            and believe your child has provided us with Personal Information, please contact us at the address above to request deletion.</p>
        <h1>Sharing Personal information</h1>
        <p>We share your Personal Information with service providers to help us provide our services and fulfill our contracts with you, as described above. For example:

We use Shopify to power our online store. You can read more about how Shopify uses your Personal Information here: https://www.shopify.com/legal/privacy.
We may share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant, 
or other lawful requests for information we receive, or to otherwise protect our rights.</p>
         <Footer/>
    </div>
  );
}