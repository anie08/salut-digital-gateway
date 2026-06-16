import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logoImg from '../../assets/imgs/photo_5278605229190485695_y-removebg-preview.png';
import './SplashScreen.css'; 

export default function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home');
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="splashContainer">
      <img src={logoImg} alt="Salut Cafe" className="rotatingLogo" />
    </div>
  );
}