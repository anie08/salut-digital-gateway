import React from 'react';
import './BackgroundVideo.css';

export default function BackgroundVideo() {
  return (
    <video autoPlay loop muted playsInline className="bg-video">
      <source src="/IMG_9045.MP4" type="video/mp4" />
    </video>
  );
}