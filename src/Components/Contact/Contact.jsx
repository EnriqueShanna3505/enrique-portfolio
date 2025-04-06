import React from 'react';
import './Contact.css';
import theme from '../../assets/theme-pattern.jpg';
import mail_icon from '../../assets/mail-icon.png';
import location_icon from '../../assets/location-icon.png';
import call_icon from '../../assets/call-icon.png';

function Contact() {
  const [result, setResult] = React.useState('');
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending....');
    const formData = new FormData(event.target);

    formData.append('access_key', 'c76227ba-23ba-4fb2-9028-0613fcd089de');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult('Form Submitted Successfully');
      event.target.reset();
    } else {
      console.log('Error', data);
      setResult(data.message);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            Hungry for my first break in the industry, I'm seeking a full-time
            position where I can demonstrate my problem-solving skills, absorb
            knowledge rapidly, and grow into a valuable asset for my team
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>enriqueshanna00@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>+60107681885</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>KUL, Malaysia</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right" id="contact-form">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" />
          <label htmlFor="">Write Your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
