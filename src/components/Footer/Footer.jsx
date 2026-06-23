import React from 'react';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mainFooter">
      <div className="footerContent">
        <div className="footerLogo">
          <h2>SALUT CAFE</h2>
          <p>Հաճելի մթնոլորտ և համեղ խոհանոց</p>
        </div>

        <div className="footerInfo">
          <div className="infoBlock">
            <h4>📍 Հասցե</h4>
            <p>Երևան, Արմենիա</p>
          </div>
          <div className="infoBlock">
            <h4>🕒 Աշխատանքային ժամեր</h4>
            <p>Ամեն օր: 10:00 - 23:00</p>
          </div>
        </div>
      </div>

      <div className="footerBottom">
        <p>&copy; {currentYear} SALUT CAFE. Բոլոր իրավունքները պաշտպանված են։</p>
      </div>
    </footer>
  );
}
