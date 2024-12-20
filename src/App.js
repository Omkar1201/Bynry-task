// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProfileList from './components/ProfileList';
import AdminPanel from './components/AdminPanel';
import ProfileDetails from './components/ProfileDetails'; // Import ProfileDetails
import './index.css'
import 'leaflet/dist/leaflet.css';

import AddProfile from './components/AddProfile';
import MapComponent from './components/MapComponent';
import Navbar from './components/Navbar';

const App = () => {
  return (
      <div className='bg-blue-100'>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<ProfileList />} />
            {/* <Route path="/admin/login" element={<AdminLogin />} /> */}
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/addprofile" element={<AddProfile />} />
            <Route path="/fulldetails" element={<ProfileDetails />} /> {/* Route for profile details */}
            <Route path="/showmap" element={<MapComponent />} />
          </Routes>
        </Router>
      </div>
  );
};

export default App;
