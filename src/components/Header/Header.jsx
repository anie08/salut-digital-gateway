import React from 'react';
import styles from './Header.css';

export default function Header({ lang, setLang }) {
  return (
    <header className={styles.header}>
      <div>
        <h1 className={styles.title}>Salut</h1>
        <p className={styles.subtitle}>Digital Menu</p>
      </div>
      <div className={styles.langSelector}>
        {['am', 'en', 'ru'].map((l) => (
          <button
            key={l}
            onClick={() => setLang(l)}
            className={`${styles.langBtn} ${lang === l ? styles.activeLang : ''}`}
          >
            {l}
          </button>
        ))}
      </div>
    </header>
  );
}