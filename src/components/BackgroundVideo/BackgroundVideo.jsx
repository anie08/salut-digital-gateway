import React from 'react';
import styles from './BackgroundVideo.css'; // 1. Դարձրինք .module.css
import videoSrc from '../../assets/imgs/IMG_9045.MP4'; // 2. Իմպորտ արեցինք քո assets-ից (հարաբերական հասցեով)

export default function BackgroundVideo() {
  return (
    <div className={styles.videoContainer}>
      <video autoPlay loop muted playsInline className={styles.video}>
        <source src={videoSrc} type="video/mp4" /> {/* 3. Օգտագործում ենք փոփոխականը */}
      </video>
      <div className={styles.overlay} />
    </div>
  );
}