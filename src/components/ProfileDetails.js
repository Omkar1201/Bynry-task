// src/components/ProfileDetails.js
import React, { useContext } from 'react';
import { ProfileContext } from '../ProfileContext';

const ProfileDetails = () => {
  const { article} = useContext(ProfileContext);
  
  if (!article) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl text-gray-600">article not found.</p>
      </div>
    ); 
  }

  return (
    <div className="container mx-auto my-10 p-5 bg-white rounded-lg shadow-lg -[40rem]">
      <div className="flex flex-col md:flex-row items-center">
        <img
          src={article.photo || 'path-to-placeholder-image.jpg'}
          alt={article.name}
          className="w-32 h-32 rounded-full border-4 border-blue-500 object-cover mb-4 md:mb-0 md:mr-6"
        />
        <div className="md:flex-1">
          <h2 className="text-3xl font-semibold text-gray-800 mb-2">{article.name}</h2>
          <p className="text-md text-gray-600 mb-4">{article.description}</p>
          <p className="text-md text-gray-500 mb-2"><strong>Address:</strong> {article.address}</p>

        </div>
      </div>
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Additional Information</h3>
        <div className="text-gray-600">
          <p className="text-md text-gray-500 mb-2"><strong>Contact:</strong> {article.contact}</p> {/* Display contact */}
          <p className="text-md text-gray-500 mb-2"><strong>Interests:</strong> {article.interests}</p> {/* Display interests */}
          <p className="text-md text-gray-500 mb-2"><strong>Job:</strong> {article.job}</p> {/* Display interests */}
        
        </div>
      </div>
      <div className="flex justify-end mt-4">
        <button
          onClick={() => window.history.back()} // Go back to the previous page
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default ProfileDetails;
