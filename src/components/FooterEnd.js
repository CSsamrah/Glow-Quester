import React from 'react'
import { Button } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';

export default function Footer() {
  return (
    <div className='end'> 
    <div class="full">
    <div className="foot">
      <h2>Glow Quester</h2>
      <div className='icons'>
      <InstagramIcon fontSize='large'></InstagramIcon>
        <FacebookIcon fontSize='large'></FacebookIcon>
        <XIcon fontSize='large'></XIcon>
        </div>
    </div>
        <div class="information-foot">
            <Button sx={{ color:'black',fontWeight:'600' }}>Information</Button>
            <Button sx={{ color:'black' }}>About Us</Button>
            <Button  sx={{ color:'black' }}>Location</Button>
            <Button sx={{ color:'black' }}>Shipping and return policy</Button>
        </div>
        <div class="help-foot">
            <Button sx={{ color:'black' , fontWeight:'600'}}>Customer Care</Button>
            <Button sx={{ color:'black' }}>FAQs</Button>
            <Button sx={{ color:'black' }}>Terms and Services</Button>
            <Button sx={{ color:'black' }}>Privacy Policy</Button>
    

        </div>
        <div class="contact-foot">
            <Button sx={{ color:'black' ,fontWeight:'600'}}>Contact-Us</Button>
            <Button sx={{ color:'black' }}>www.GlowQuester.com</Button>
            <Button sx={{ color:'black' }}>Track Order</Button>
            <Button sx={{ color:'black' }}>Sign In</Button>
        </div>
        </div>


   <div>
   
    <div class="foot-end">
        <div class="privacy">
            <Button sx={{ color:'black',fontSize:'1em' }}> All rights reserved. GlowQuester © 2024</Button>
            <Button sx={{ color:'black',fontSize:'1em' }}>Terms of service</Button>
            <Button sx={{ color:'black' ,fontSize:'1em'}}>Privacy Policy</Button>
            <Button sx={{ color:'black' ,fontSize:'1em'}}>Code of Conduct</Button>
            <Button sx={{ color:'black' ,fontSize:'1em'}}>Third party Code of Conduct</Button>
        </div>
        
    </div>
</div>
</div>
)}
