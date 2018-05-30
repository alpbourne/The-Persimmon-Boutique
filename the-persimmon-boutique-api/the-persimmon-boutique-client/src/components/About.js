import React from 'react';
import './Routes.css';
import aboutPage from './aboutPage.jpg'

const About = () => {
  return (
    <div className="AboutContainer">
      <h2>About Us</h2>
      <div className="AboutCard">
        <img className="AboutImage" height={300} alt="We Are Open" src={aboutPage} />
        <p>The Persimmon Boutique first opened up on July 1, 1986. We are a family owned lifestyle store located on Main Street. Originally we sold mostly refurbished furniture, but as time went one we gradually started adding all types lifestyle items. Today we sell kitchenware, clothes, jewelry, home decor, and other adorable miscellaneous items.</p>
        <p>If you have any suggesstions or encouragement for us, we would love for you to write a review on our homepage. We love customer feedback! Please stop by and introduce yourself to us next time you come in. We enjoy meeting and chatting with our customers!</p>
      </div>
    </div>
  );
};

export default About;
