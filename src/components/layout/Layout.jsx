import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const location = useLocation();
  // Don't show footer on the demo iframe page
  const isDemoPage = location.pathname.endsWith('/demo');

  return (
    <div className="app-wrapper">
      <Navbar />
      <main className="main-content">
        {children}
      </main>
      {!isDemoPage && <Footer />}
    </div>
  );
};

export default Layout;
