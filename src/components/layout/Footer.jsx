import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container-prose footer-content">
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/shubhambg" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/Shubham-Gambhire" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="mailto:shubhambgambhire@gmail.com">Email</a>
        </div>
        <div className="footer-copyright">
          &copy; {currentYear} Shubham Gambhire. Digital Supply Chain Lab.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
