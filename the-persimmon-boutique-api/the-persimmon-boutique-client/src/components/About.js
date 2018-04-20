import React from 'react';
import './Routes.css';
import aboutPage from './aboutPage.jpg'

const About = () => {
  return (
    <div className="AboutContainer">
      <h2>About Us</h2>
      <div className="AboutCard">
        <img width={598} height={300} alt="We Are Open" src={aboutPage} />
        <p>The Perisommon Boutique first opened up on July 1, 1986. We are a family owned lifestyle store located on Main Street.</p>
      </div>
    </div>
  );
};

export default About;
