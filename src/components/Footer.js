import React from 'react';
import '../App.css'; // Import the consolidated CSS file

const Footer = () => {
  return (
    <footer className="footer bg-body-tertiary text-center">
      <div className="container p-4 pb-0">
        <section className="mb-4">
          <a className="m-1" href="https://wa.me/919562856710" role="button" target="_blank" rel="noopener noreferrer">
            <img src="/whatsapp.png" alt="WhatsApp" className="social-icon" />
          </a>

          <a className="m-1" href="https://www.facebook.com/your_profile" role="button" target="_blank" rel="noopener noreferrer">
            <img src="/facebook.png" alt="Facebook" className="social-icon" />
          </a>

          <a className="m-1" href="https://www.instagram.com/adarshm.nair?igsh=YmtraXdwM2dtOXBk" role="button" target="_blank" rel="noopener noreferrer">
            <img src="/instagram.png" alt="Instagram" className="social-icon" />
          </a>

          <a className="m-1" href="https://www.linkedin.com/in/adarsh-m-nair-006a94221" role="button" target="_blank" rel="noopener noreferrer">
            <img src="/linkden.png" alt="LinkedIn" className="social-icon" />
          </a>

          <a className="m-1" href="https://github.com/Adarsh4959" role="button" target="_blank" rel="noopener noreferrer">
            <img src="/github.png" alt="GitHub" className="social-icon" />
          </a>
        </section>
      </div>

      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright:
        <a className="text-body" href="https://github.com/Adarsh4959">Adarsh4959</a>
      </div>
    </footer>
  );
};

export default Footer;