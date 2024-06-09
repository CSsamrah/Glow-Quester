import React from 'react';
import { Button } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className='end'> 
      <div className="full">
        <div className="foot">
          <h2>Glow Quester</h2>
          <div className='icons'>
            <InstagramIcon fontSize='large' />
            <FacebookIcon fontSize='large' />
            <XIcon fontSize='large' />
          </div>
        </div>
        <div className="information-foot">
          <Button sx={{ color: 'black', fontWeight: '600' }}>Information</Button>
          <Link to='/about-us'>
          <Button sx={{ color: 'black' }}>About Us</Button>
          </Link>
          <Link to='/loc-ation'>
          <Button sx={{ color: 'black' }}>Location</Button>
          </Link>
          <Link to='/shipping-return'>
          <Button sx={{ color: 'black' }}>Shipping and return policy</Button>
          </Link>
        </div>
        <div className="help-foot">
          <Button sx={{ color: 'black', fontWeight: '600' }}>Customer Care</Button>
          <Link to='/faq-s'>
          <Button sx={{ color: 'black' }}>FAQs</Button>
          </Link>
          <Link to="/terms-of-service">
            <Button sx={{ color: 'black' }}>Terms and Services</Button>
          </Link>
          <Link to="/privacy-policy">
            <Button sx={{ color: 'black' }}>Privacy Policy</Button>
          </Link>
        </div>
        <div className="contact-foot">
          <Button sx={{ color: 'black', fontWeight: '600' }}>Contact-Us</Button>
          <Link to='/contact-page'>
          <Button sx={{ color: 'black' }}>www.GlowQuester.com</Button>
          </Link>
          <Link to="/track-order">
          <Button sx={{ color: 'black' }}>Track Order</Button>
          </Link>
          <Link to='/sign-up'>
          <Button sx={{ color: 'black' }}>Sign In</Button>
          </Link>
        </div>
      </div>
      <div>
        <div className="foot-end">
          <div className="privacy">
            <Button sx={{ color: 'black', fontSize: '1em' }}> All rights reserved. GlowQuester © 2024</Button>
            <Link to="/terms-of-service">
              <Button sx={{ color: 'black', fontSize: '1em' }}>Terms of service</Button>
            </Link>
            <Link to="/privacy-policy">
              <Button sx={{ color: 'black', fontSize: '1em' }}>Privacy Policy</Button>
            </Link>
            <Button sx={{ color: 'black', fontSize: '1em' }}>Code of Conduct</Button>
            <Button sx={{ color: 'black', fontSize: '1em' }}>Third party Code of Conduct</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

