import React from 'react';
import '../App.css';
import Button from './Button';
import './MainSection.css';

const MainSection = () => {
  return (
    <div className="hero-container">
      <video
        src="/videos/video-2.mp4"
        autoPlay
        loop
        muted
        className="video-class"
      />
      <h1>Adventure Awaits</h1>
      <p>What are you waiting for?</p>

      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Get Started
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
};

export default MainSection;
