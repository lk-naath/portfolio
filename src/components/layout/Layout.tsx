import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-primary text-white">
      <Navbar />
      <main className="w-full px-6 py-8">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
