import React from 'react';
import './Hero.css';
import profile from '../../assets/profile.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';

function Hero() {
  return (
    <div id="home" className="hero">
      <img className="profile-img" src={profile} alt="" />
      <h1>
        <span>I'm Enrique Shanna,</span> Software Engineer Graduate{' '}
      </h1>
      <p>
        Software Engineering graduate passionate about web development and eager
        to contribute innovative solutions while growing technical expertise in
        a collaborative environment.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
}
export default Hero;
