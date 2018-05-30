import React from 'react';
import './Routes.css';
import contactPage from './contactPage.jpg'

const Contact = () => {
  return (
    <div className="ContactContainer">

      <h2>Contact Us</h2>
      <div className="ContactCard">
        <img className="ContactImage" width={598} height={300} alt="We Are Open" src={contactPage} />
        <p><b>Address: </b>1 Main Street, Gerber, MD 23456</p>
        <p><b>Email Address: </b>ThePersimmonBoutique@gmail.com</p>
        <p><b>Facebook Page: </b>The Persimmon Boutique</p>
        <p><b>Twitter: </b>@ThePersimmonBoutique</p>
        <p><b>Instagram: </b>@ThePersimmonBoutique</p>
      </div>
    </div>
  );
};

export default Contact;
