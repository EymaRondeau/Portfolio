import React from 'react';
import '../styles/ContactInfo.scss';

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact-title">
        <h2>Informations de contact</h2>
      </div>
      <div className="contact-container">
        <div className="contact-box">
          <img src={process.env.PUBLIC_URL + "/images/icone-telephone.png"} alt="Téléphone" className="contact-icon" />
          <h3>TÉLÉPHONE</h3>
          <p><a href="tel:+33623542905">+33 6 23 54 29 05</a></p>
        </div>
        <div className="contact-box">
          <img src={process.env.PUBLIC_URL + "/images/icone-mail.png"} alt="Email" className="contact-icon" />
          <h3>EMAIL</h3>
          <p><a href="mailto:eyma@mey-conception.com">eyma@mey-conception.com</a></p>
        </div>
        <div className="contact-box">
          <img src={process.env.PUBLIC_URL + "/images/icone-localisation.png"} alt="Localisation" className="contact-icon" />
          <h3>LOCALISATION</h3>
          <p>Vétraz-Monthoux, 74100</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;