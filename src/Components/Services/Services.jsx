import React from 'react';
import './Services.css';
import theme from '../../assets/theme-pattern.jpg';
import Services_Data from '../../assets/services_data.js';
import arrow_icon from '../../assets/arrow-icon.png';

function Services() {
  return (
    <div id="services" className="services">
      <div className="services-title">
        <h1>Projects I've worked so far</h1>
        <img src={theme} alt="" />
      </div>
      <div className="services-container">
        {Services_Data.map((service, index) => {
          return (
            <div key={index} className="services-format">
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              <p>{service.s_desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Services;
