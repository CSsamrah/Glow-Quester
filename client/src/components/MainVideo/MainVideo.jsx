import React, { useState } from 'react';
import video1 from '../images/skincarevideo.mp4';
import '../App.css';
import Box from '@mui/material/Box';

export default function MainVideo() {
    return (
        <div className="video-background-container" sx={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
          <video autoPlay muted loop
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1,
          position: 'absolute',
          top: 0,
          left: 0,
        }} className="video-background">
            <source src={video1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          zIndex: 1,
        }}
      >
        <Box sx={{ textAlign: 'center', paddingTop: '50px' }}>
          <h1 style={{ fontSize: '4.4rem', fontFamily: 'serif', fontWeight: '700', color: '#fff' }}>
            Where beauty begins with <span style={{ fontWeight: 'normal' ,fontStyle:'italic'}}>care</span>
          </h1>
          <p style={{ fontSize: '1.7rem',fontFamily: 'serif', color: '#fff', fontWeight: 'light' }}>
            Self-care philosophy where attention to detail and a personalized approach are paramount.
          </p>
        </Box>
      </Box>
    </div>
  );
};
