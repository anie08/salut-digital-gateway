import React from 'react';
import styles from './SplashScreen.css';

export default function SplashScreen() {
  return (
    <div className={styles.splashContainer}>
      <div className={styles.logoWrapper}>
        <div className={styles.pulseRing}></div>
        <div className={styles.spinner}></div>
      </div>
      <h1 className={styles.brandName}>Salut.cafe</h1>
      <p className={styles.subtitle}>Digital Gateway</p>
    </div>
  );
}