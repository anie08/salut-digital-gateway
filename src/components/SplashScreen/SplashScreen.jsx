import logoImg from "../../assets/imgs/photo_5278605229190485695_y-removebg-preview.png";

import "./SplashScreen.css";

export default function SplashScreen() {
  return (
    <div className="splashContainer">
      <img src={logoImg} alt="Salut Cafe" className="rotatingLogo" />
    </div>
  );
}
