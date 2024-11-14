import React, { useContext, useState } from 'react';
import { ProfileContext } from '../ProfileContext';
import { Link } from 'react-router-dom';

const AdminPanel = () => {
  const { profiles, setProfiles } = useContext(ProfileContext);
  const [newProfile, setNewProfile] = useState({
    name: '',
    photo: '',
    description: '',
    address: '',
    contact: '',
    interests: '',
    job: ''
  });
  const [editingProfileId, setEditingProfileId] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProfile({ ...newProfile, [name]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setNewProfile({ ...newProfile, photo: reader.result });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleEdit = (profile) => {
    setEditingProfileId(profile.id);
    setNewProfile(profile);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    if (editingProfileId !== null) {
      const updatedProfiles = profiles.map((profile) =>
        profile.id === editingProfileId ? { ...profile, ...newProfile } : profile
      );
      setProfiles(updatedProfiles);
      setEditingProfileId(null);
      setNewProfile({ name: '', photo: '', description: '', address: '', contact: '', interests: '', job: '' });
    }
  };

  const handleCancelEdit = () => {
    setEditingProfileId(null);
    setNewProfile({ name: '', photo: '', description: '', address: '', contact: '', interests: '', job: '' });
  };

  const handleDelete = (id) => {
    const updatedProfiles = profiles.filter((profile) => profile.id !== id);
    setProfiles(updatedProfiles);
  };

  return (
    <div className="p-6 bg-gradient-to-r from-blue-50 to-blue-100 min-h-screen">
      <h2 className="text-3xl font-extrabold text-center mb-6">Admin Panel</h2>

      <h3 className="text-2xl font-semibold mb-4">Profile List (Admin View)</h3>
      <div className="flex justify-between">
        <Link to="/">
          <button className="mb-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300">
            Home Page
          </button>
        </Link>
        <Link to="/addprofile">
          <button className="mb-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300">
            Add Profile
          </button>
        </Link>
      </div>
      {profiles.map((profile) => (
        <div key={profile.id} className="profile-card bg-white rounded-lg shadow-lg p-6 border border-gray-300 mb-4 transition-transform transform">
          <h2 className="text-xl font-semibold text-gray-800">{profile.name}</h2>
          <div className="flex items-center mb-4">
            <img
              src={profile.photo ? profile.photo : 'path-to-placeholder-image.jpg'}
              alt={profile.name}
              className="w-28 h-28 rounded-full border-2 border-blue-500 shadow-md mr-4"
            />
            <div>
              <p className="text-base text-gray-700">{profile.description}</p>
              <p className="text-base text-gray-500">{profile.address}</p>
            </div>
          </div>
          <div className="flex space-x-3 mt-4">
            <button
              onClick={() => handleEdit(profile)}
              className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(profile.id)}
              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              Delete
            </button>
          </div>

          {/* Render edit form below the profile only if it's the editing profile */}
          {editingProfileId === profile.id && (
            <form onSubmit={handleUpdate} className="bg-white p-6 rounded-lg shadow-md mt-4 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Edit Profile</h3>
              <input
                type="text"
                name="name"
                value={newProfile.name}
                onChange={handleInputChange}
                placeholder="Name"
                required
                className="p-2 border rounded-md border-gray-300 w-full mb-4"
              />
              <input
                type="file"
                name="photo"
                onChange={handleImageUpload}
                accept="image/*"
                className="mb-4"
              />
              <br></br>
              <label>
                Description:
                <textarea
                  type="text"
                  name="description"
                  value={newProfile.description}
                  onChange={handleInputChange}
                  placeholder="Description"
                  required
                  className="p-2 border rounded-md border-gray-300 w-full mb-4"
                />
              </label>
              <label>
                Address:
                <input
                  type="text"
                  name="address"
                  value={newProfile.address}
                  onChange={handleInputChange}
                  placeholder="Address"
                  required
                  className="p-2 border rounded-md border-gray-300 w-full mb-6"
                />
              </label>
              <label>
                Contact:
                <input
                  type="text"
                  name="contact"
                  placeholder="Contact Information"
                  value={newProfile.contact}
                  onChange={handleInputChange}
                  className="p-2 border rounded-md border-gray-300 w-full mb-6"
                />
              </label>
              <label>
                Interests
                <input
                  type="text"
                  name="interests"
                  placeholder="Interests (comma-separated)"
                  value={newProfile.interests}
                  onChange={handleInputChange}
                  className="p-2 border rounded-md border-gray-300 w-full mb-6"
                />
              </label>
              <label className=''>
                Job:
                <input
                  type="text"
                  name="job"
                  placeholder="Job"
                  value={newProfile.job}
                  onChange={handleInputChange}
                  className="p-2 border rounded-md border-gray-300 w-full mb-6"
                />
              </label>
              <div className="flex space-x-4">
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-700"
                >
                  Update Profile
                </button>
                <button
                  type="button"
                  onClick={handleCancelEdit}
                  className="px-4 py-2 bg-gray-400 text-white rounded-lg shadow-lg hover:bg-gray-500"
                >
                  Cancel Edit
                </button>
              </div>
            </form>
          )}
        </div>
      ))}
    </div>
  );
};

export default AdminPanel;
