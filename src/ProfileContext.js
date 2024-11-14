// src/ProfileContext.js
import React, { createContext, useState } from 'react';

// Create Context
export const ProfileContext = createContext();

// Default profiles if localStorage is empty
const defaultProfiles = [
  {
    id: 1,
    name: "John Doe",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPSRFYYQuN6OLy85kZqv1grnEGC8KGNwEgwg&s", // Placeholder image URL
    description: "Software Developer with over 5 years of experience in building web applications using modern technologies. Proficient in JavaScript, React, and Node.js. Passionate about creating efficient and user-friendly solutions.",
    address: "Pune",
    contact: "john.doe@example.com",
    latitude:18.52561433737639,
    longitude: 73.85264946677131,
    job:"Software Engineer",
    interests: ["Web Development", "Open Source", "AI"],
  },
  {
    id: 2,
    name: "Jane Smith",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPT4uOKm8uqQrllpIsbkLC3A5_6Ia9IwdfCIlxGtMVzKqMGFHXh5bmId-Bu9MR8Par8J0&usqp=CAU",
    description: "Graphic Designer with a flair for creativity and a keen eye for detail. Specializes in branding, print design, and digital media. Dedicated to transforming ideas into visually stunning designs that engage and inspire.",
    address: "Pimpri",
    contact: "jane.smith@example.com",
    job:"Product Manager",
    latitude:18.62989969421591, longitude:73.82656660894484,
    interests: ["Graphic Design", "Photography", "Travel"],
  },
  {
    id: 3,
    name: "Alice Johnson",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFWmKKRobzdsu1SUzNxkjOIsBD0InZjD-JnxsK_A-xsPorZSTTZEkPeZ67Y8K1IVaIa9A&usqp=CAU",
    description: "Project Manager with 8 years of experience in leading cross-functional teams and delivering projects on time and within budget. Skilled in Agile methodologies and stakeholder management, with a strong focus on team collaboration.",
    address: "Nashik",
    contact: "alice.johnson@example.com",
    job:"Software Engineer",
    latitude:19.997164310741578,longitude: 73.7924774674929,
    interests: ["Project Management", "Agile", "Team Building"],
  },
  {
    id: 4,
    name: "Sophie Williams",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF9f__J44zKQ2UC-8XGfJMhObri2U80qxWhg&s",
    description: "Data Scientist passionate about transforming data into actionable insights. Experienced in machine learning, data analysis, and statistical modeling. Committed to leveraging data to solve complex business challenges.",
    address: "SambhajiNagar",
    contact: "sophie.williams@example.com",
    job:"Data Scientist",
    latitude:19.8723350601603, longitude:75.32202841204837,
    interests: ["Data Analysis", "Machine Learning", "Statistics"],
  },
  {
    id: 5,
    name: "Emily Davis",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZdXMP7zL2rDPdjZfMjcTOmMIo4w4ZE300Vq5zgD_b-ReUIfLan1y-iuiSRd5QPqOyerA&usqp=CAU",
    description: "Digital Marketing Specialist with expertise in SEO, content marketing, and social media strategy. Proven track record of increasing online visibility and driving traffic through innovative marketing campaigns.",
    address: "Mumbai",
    contact: "emily.davis@example.com",
    job:"Data Scientist",
    latitude:19.053556413166252, longitude:72.88003042739672,
    interests: ["Digital Marketing", "SEO", "Content Creation"],
  },
  {
    id: 6,
    name: "Michael Brown",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN6Qw7pTITge4f43sWDk9JoiRadGiW3lRA8p2hQ3LIkzwmvod9v2T0O_8fREQtsPj5sNs&usqp=CAU",
    description: "Full Stack Developer with a strong background in both front-end and back-end technologies. Adept at building scalable applications and proficient in frameworks like Angular, React, and Express.js.",
    address: "Thane",
    contact: "michael.brown@example.com",
    job:"Product Manager",
    latitude:19.212363327988143, longitude:72.97679978953909,
    interests: ["Full Stack Development", "Cloud Computing", "APIs"],
    
  }
];

export const ProfileProvider = ({ children }) => {
  const [profiles, setProfiles] = useState(defaultProfiles);

  // const handleDelete = (id) => {
  //   const updatedProfiles = profiles.filter(profile => profile.id !== id);
  //   setProfiles(updatedProfiles);
  //   localStorage.setItem('profiles', JSON.stringify(updatedProfiles)); // Update localStorage
  // };
  const addProfile = (profileData) => {
    const newId = profiles.length > 0 ? Math.max(...profiles.map(profile => profile.id)) + 1 : 1;
    const newProfile = { id: newId, ...profileData };
    setProfiles([...profiles, newProfile]);
  };
  const [center, setCenter] = useState({ lat: 18.627631989986963, lng: 73.81697335021828 });

  const contextValue = {
    profiles,
    setProfiles,
    addProfile,
    center, setCenter
  };

  return (
    <ProfileContext.Provider value={contextValue}>
      {children}
    </ProfileContext.Provider>
  );
};
