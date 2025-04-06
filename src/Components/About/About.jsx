import React from 'react';
import './About.css';
import profile from '../../assets/profile.png';
import theme from '../../assets/theme-pattern.jpg';

function About() {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              As a recent Software Engineering graduate from UNIMAS, I am on a
              mission to turn my academic knowledge into tangible impact as a
              developer—eager to absorb industry insights, refine my craft, and
              grow within a team that challenges me to build better solutions
              every day.
            </p>
            <p>
              While I may be new to the industry, I bring a relentless drive,
              relentless curiosity, and the drive to grow into a developer who
              delivers meaningful solutions.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: '90%' }} />
            </div>
            <div className="about-skill">
              <p>React </p>
              <hr style={{ width: '70%' }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: '80%' }} />
            </div>
            <div className="about-skill">
              <p>Java</p>
              <hr style={{ width: '50%' }} />
            </div>
            <div className="about-skill">
              <p>MongoDB</p>
              <hr style={{ width: '70%' }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>6</h1>
          <p>MONTHS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>4 OWN</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1></h1>
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default About;
