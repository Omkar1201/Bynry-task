import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-semibold">bynry</div>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:underline font-semibold">Home</Link>
          </li>
          <li>
            <Link to="/admin" className="hover:underline font-semibold">Admin</Link>
          </li>
          <li>
            <Link to="/addprofile" className="hover:underline font-semibold">Add Profile</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
