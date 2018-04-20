import React from 'react';
import './Routes.css';
import contactPage from './contactPage.jpg'

const About = () => {
  return (
    <div className="ContactContainer">
      <img width={900} height={500} alt="" src={contactPage} />
      <h2>Contact Us</h2>
      <div className="ContactCard">
        <p><b>Address: </b>1 Main Street, Gerber, MD 23456</p>
        <p><b>Email Address: </b>ThePersimmonBoutique@gmail.com</p>
        <p><b>Facebook Page: </b>The Persimmon Boutique</p>
        <p><b>Twitter: </b>@ThePersimmonBoutique</p>
        <p><b>Instagram: </b>@ThePersimmonBoutique</p>
      </div>
    </div>
  );
};

export default About;
