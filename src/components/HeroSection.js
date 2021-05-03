import React from "react";
import { Button } from "./Button";
import './HeroSection.css'
import '../App.css'
import video1 from '../videos/video-1.mp4'

const HeroSection = () => {

  return (
    <div className="hero-container">
      <video src={video1} autoPlay loop muted />
        
      <h4>Hayata Bakışını Değiştir</h4>
      <p>Şimdi Tam Zamanı</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          DETAYLAR BURADA
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          İZLE <i className="far fa-play"></i>
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
