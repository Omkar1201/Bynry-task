import React, { useState, useContext } from 'react';
import { ProfileContext } from '../ProfileContext';
import { useNavigate } from 'react-router-dom';

const AddProfile = () => {
    const { addProfile } = useContext(ProfileContext);
    const [newProfile, setNewProfile] = useState({
        name: '',
        photo: '',
        description: '',
        address: '',
        contact: '',
        interests: '',
        job: ''
    });
    const navigate = useNavigate();

    // Handle input changes for all fields
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProfile({ ...newProfile, [name]: value });
    };

    // Handle image upload
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

    // Handle form submission to add profile
    const handleSubmit = (e) => {
        e.preventDefault();
        addProfile(newProfile);
        navigate('/'); // Redirect to home page after adding the profile
    };

    return (
        <div className="p-6 min-h-screen">
            <h2 className="text-3xl font-extrabold text-center mb-6">Add New Profile</h2>

            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Fill in Profile Information</h3>

                <input
                    type="text"
                    name="name"
                    value={newProfile.name}
                    onChange={handleInputChange}
                    placeholder="Name"
                    required
                    className="p-2 border rounded-md border-gray-300 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                    type="file"
                    name="photo"
                    onChange={handleImageUpload}
                    accept="image/*"
                    className="mb-4"
                />
                <input
                    type="text"
                    name="description"
                    value={newProfile.description}
                    onChange={handleInputChange}
                    placeholder="Description"
                    required
                    className="p-2 border rounded-md border-gray-300 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                    type="text"
                    name="address"
                    value={newProfile.address}
                    onChange={handleInputChange}
                    placeholder="Address"
                    required
                    className="p-2 border rounded-md border-gray-300 w-full mb-6 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                    type="text"
                    name="contact"
                    value={newProfile.contact}
                    onChange={handleInputChange}
                    placeholder="Contact"
                    className="p-2 border rounded-md border-gray-300 w-full mb-6 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                    type="text"
                    name="interests"
                    value={newProfile.interests}
                    onChange={handleInputChange}
                    placeholder="Interests"
                    className="p-2 border rounded-md border-gray-300 w-full mb-6 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                    type="text"
                    name="job"
                    value={newProfile.job}
                    onChange={handleInputChange}
                    placeholder="Job"
                    className="p-2 border rounded-md border-gray-300 w-full mb-6 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button
                    type="submit"
                    className="w-full px-4 py-2 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-700 transition-all duration-300"
                >
                    Add Profile
                </button>
            </form>
        </div>
    );
};

export default AddProfile;
