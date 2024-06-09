import React from "react";
import Footer from '../FooterEnd/FooterEnd'
import image7 from '../images/Shipping (2).png'

export default function ShippingAndReturn(){
    return(
        <div className="body">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className='image-container'>
        <img src={image7} alt='Glow' className='full-width-image'></img>
      </div>
      <h1>Shipping Policy</h1>
      <ul>
        <li>Delivery Charges are Rs. 200</li>
        <li>In case of product unavailability, Glow Quester beauty team will inform the customer accordingly.</li>
        <li>An order will processed with 24 hours on weekdays.</li>
        <li>Any opened product shall not be returned.</li>
        <li>Orders will reach customers within 3-5 business days</li>
        <li>HERbeauty team has the discretion to cancel any order.</li>
        <li>Online orders will only be exchanged through the ecommerce channel and not physically at any store. Please refer to our exchange and return policy</li>
        <li>Gifts with purchase cannot be claimed on the same address more than once</li>
      </ul>
      <br></br>
      <h1>Return Policy</h1>
      <ul>
        <li>Product will be exchanged within 7 days of purchase incase of any damage; used products may not be replaced.</li>
        <li>Original receipt must be attached</li>
        <li>Product must be in original packing</li>
        <li>If customer has received what they ordered, delivery charges will be borne by customer</li>
        <li>Products purchased online can only be exchanged online</li>
        <li>Product must be evaluated by the QA team before making an exchange</li>
        <li>The time period for an exchange request can be 5 – 7 business day</li>
        <li>In-case of stock out, customer has to wait till the arrival of the stock, and upon agreement we can provide online store credit</li>
        <li>We reserve the right to reject the exchange or return requests based on the conditions</li>
      </ul>
      <br>
      </br>
      <br></br>
      <Footer/>
      </div>

    );
}