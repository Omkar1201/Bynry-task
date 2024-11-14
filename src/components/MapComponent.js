import React, { useContext, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { ProfileContext } from '../ProfileContext';
import L from 'leaflet'; // To use a custom icon, if needed

import 'leaflet/dist/leaflet.css'; // Ensure Leaflet CSS is imported

const MapComponent = () => {
    const { center } = useContext(ProfileContext);
    const ZOOM_LEVEL = 13;

    // Optional: Create a custom marker icon
    const customIcon = new L.Icon({
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png', // Default pin icon, replace with your URL if needed
        iconSize: [40, 40], // Size of the icon
        iconAnchor: [20, 40], // Pointing the icon to the center-bottom
        popupAnchor: [0, -40], // Popup above the marker
    });
    useEffect(()=>{
        window.scrollTo({
            top:0,
            behavior: 'smooth'
        })
    },[])
    return (
        <div style={{ height: '100vh', width: '100%' }} className='p-4 pb-[4rem]'> {/* Ensure map takes full screen */}
            <MapContainer center={center} zoom={ZOOM_LEVEL} style={{ height: '100%', width: '100%' }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />

                {/* Marker at the specific coordinates */}
                <Marker position={center} icon={customIcon}>
                    <Popup>
                        It's my location
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default MapComponent;
