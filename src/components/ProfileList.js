import React, { useContext, useState } from 'react';
import { ProfileContext } from '../ProfileContext';
import { Link, useNavigate } from 'react-router-dom';

const ProfileList = () => {
  const { profiles, setCenter ,setarticle} = useContext(ProfileContext);
  const [nameFilter, setNameFilter] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [otherFilter, setOtherFilter] = useState('');
  const navigate = useNavigate();

  const handleSummaryClick = (e, latitude, longitude) => {
    e.stopPropagation();
    if (latitude && longitude) {
      setCenter({ lat: latitude, lng: longitude });
    }
    navigate('/showmap');
  };

  const filteredProfiles = profiles.filter(profile =>
    profile.name.toLowerCase().includes(nameFilter.toLowerCase()) &&
    profile.address.toLowerCase().includes(locationFilter.toLowerCase()) &&
    (profile.description.toLowerCase().includes(otherFilter.toLowerCase()) ||
      profile.address.toLowerCase().includes(otherFilter.toLowerCase()))
  );

  return (
    <div className="p-4 sm:p-6  min-h-screen">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-4">Profile List</h1>

      {/* Search Filters */}
      <div className="flex flex-col sm:flex-row justify-center mb-4 gap-2">
        <input
          type="text"
          placeholder="Search by name"
          value={nameFilter}
          onChange={(e) => setNameFilter(e.target.value)}
          className="p-2 w-full sm:w-1/3 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          placeholder="Search by location"
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
          className="p-2 w-full sm:w-1/3 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          placeholder="Search by other"
          value={otherFilter}
          onChange={(e) => setOtherFilter(e.target.value)}
          className="p-2 w-full sm:w-1/3 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Admin Panel Link */}
      <Link to="/admin" className="mb-4 inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
        Admin Panel
      </Link>

      {/* Profile Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {filteredProfiles.length > 0 ? (
          filteredProfiles.map(profile => (
            <div key={profile.id} className="profile-card cursor-pointer bg-white rounded-lg shadow-lg p-4 border border-gray-300 transition-transform transform hover:scale-105" title="Show Details">
              <div onClick={()=>{setarticle(profile);navigate('/fulldetails')}} className="flex flex-col items-center">
                <img
                  src={profile.photo ? profile.photo : 'path-to-placeholder-image.jpg'}
                  alt={profile.name}
                  className="w-24 h-24 rounded-full border-2 border-blue-500 mb-2"
                />
                <h2 className="text-lg md:text-xl font-semibold text-gray-800">{profile.name}</h2>
                <p className="text-sm md:text-base text-gray-600 text-center">
                  {profile.description.length > 100 ? `${profile.description.slice(0, 100)}...` : profile.description}
                </p>
                <p className="text-xs md:text-sm text-gray-500 text-center">{profile.address}</p>
              </div>
              {/* Summary Button */}
              <div className='flex justify-center'>
                <button
                  onClick={(e) => handleSummaryClick(e, profile.latitude, profile.longitude)}
                  className="mt-2 bg-blue-500 text-white rounded-lg px-3 py-1 hover:bg-blue-600 transition"
                >
                  Summary
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No profiles available. Please add some!</p>
        )}
      </div>
    </div>
  );
};

export default ProfileList;
