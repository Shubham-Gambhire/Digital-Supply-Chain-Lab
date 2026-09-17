import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import './Navbar.css';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blog' },
    { name: 'About', path: '/about' },
    { name: 'Resume', path: '/resume' }
  ];

  return (
    <header className="navbar">
      <div className="navbar-container container-grid">
        <div className="navbar-logo">
          <NavLink to="/" onClick={closeMobileMenu}>Digital Supply Chain Lab</NavLink>
        </div>

        <nav className="navbar-links desktop-only">
          {navLinks.map(link => (
            <NavLink 
              key={link.path} 
              to={link.path}
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            >
              {link.name}
            </NavLink>
          ))}
          <div className="navbar-theme-toggle">
            <ThemeToggle />
          </div>
        </nav>

        <div className="navbar-mobile-controls mobile-only">
          <ThemeToggle />
          <button 
            className="hamburger-btn" 
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-menu">
          <nav className="mobile-nav-links">
            {navLinks.map(link => (
              <NavLink 
                key={link.path} 
                to={link.path}
                className={({ isActive }) => isActive ? "mobile-nav-link active" : "mobile-nav-link"}
                onClick={closeMobileMenu}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
