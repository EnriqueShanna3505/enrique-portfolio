import React from 'react';
import './Footer.css';
import logo from '../../assets/logo.png';
import user_icon from '../../assets/user-icon.png';
function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={logo} alt="" />
          <p></p>
        </div>
        <div className="footer-top-right"></div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          Hello I'm Enrique . This is my portfolio
        </p>
        <div className="footer-bottom-right">
          <p></p>
          <p></p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
