import React from 'react';
import { Outlet } from 'react-router-dom';
// import Footer from '../Components/Core/Footer';
// import Navbar from '../Components/Core/Navbar';

const NavbarLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-green-500">
      {/* <Navbar /> */}

      <main className="container mx-auto p-3 relative">
        <Outlet />
      </main>

      {/* <Footer /> */}
    </div>
  );
}

export default NavbarLayout;
