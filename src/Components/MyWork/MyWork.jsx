import React from 'react';
import './MyWork.css';
import theme from '../../assets/theme-pattern.jpg';
import mywork_data from '../../assets/mywork_data.js';
import arrow_icon from '../../assets/arrow-icon.png';

function MyWork() {
  // Define project links in a clean object
  const projectLinks = {
    1: 'https://enriqueshanna3505.github.io/Event-Management-Project/index.html',
    2: 'https://e-commerce-store-nxpd.onrender.com/secret-dashboard',
    3: 'https://enaxsound.onrender.com/',
    4: 'https://enaxsound-tech-store.onrender.com/',
  };

  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={theme} alt="" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) =>
          projectLinks[work.w_no] ? (
            <a
              key={index}
              href={projectLinks[work.w_no]}
              target="_blank"
              rel="noopener noreferrer"
              className="work-item" // Add this class for consistent styling
            >
              <img src={work.w_img} alt={work.w_name} />
              <div className="work-overlay">
                <p>{work.w_name}</p>
              </div>
            </a>
          ) : (
            <div key={index} className="work-item">
              {' '}
              {/* Wrap in div for consistent sizing */}
              <img src={work.w_img} alt={work.w_name} />
            </div>
          )
        )}
      </div>
      <div className="mywork-show-more">
        <p>Coming Soon</p>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  );
}

export default MyWork;
