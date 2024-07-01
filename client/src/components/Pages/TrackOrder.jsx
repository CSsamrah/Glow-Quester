import React, { useState } from 'react';
import './TrackOrder.css'
import Footer from '../FooterEnd/FooterEnd'
import image3 from '../images/Glow quester (1).png'

export default function TrackOrder() {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [trackingResult, setTrackingResult] = useState('');

  const doTrack = () => {
    if (trackingNumber.trim() === '') {
      alert('Enter your tracking number.');
      return;
    }

    setTrackingResult(`Tracking result for ${trackingNumber}`);
  };

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
      <br></br>
      <br></br>
      <p>Please enter your tracking number below. If your tracking number doesn't work, feel free to contact us at support@yourstorename.com.</p>
      <div className='input-container'>
        <input type="text" value={trackingNumber} onChange={(e) => setTrackingNumber(e.target.value)} maxLength="50" />
        <input type="button" value="TRACK" onClick={doTrack} />
      </div>
      <div className='tracking-result'>
        {trackingResult && <p>{trackingResult}</p>} <br></br>
      </div>
      <Footer/>
    </div>
  );
}

