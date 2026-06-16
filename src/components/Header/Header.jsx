import React from 'react';
import './Header.css';

export default function Header({ lang, setLang }) {
  return (
    <header className="header">
      <div>
        <h1 className="title">Salut</h1>
        <p className="subtitle">Digital Menu</p>
      </div>

      <div className="langSelector">
        {['am','en','ru'].map(l => (
          <button
            key={l}
            onClick={() => setLang(l)}
            className={`langBtn ${lang === l ? 'activeLang' : ''}`}
          >
            {l.toUpperCase()}
          </button>
        ))}
      </div>
    </header>
  );
}