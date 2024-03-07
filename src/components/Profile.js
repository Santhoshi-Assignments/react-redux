import { Link } from 'react-router-dom';
import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const userProfile = useSelector((state) => state.user);

  return (
    <div className="profile-container">
      <h2>Personal Details</h2>
      <p>Name: {userProfile.name}</p>
      <p>Country: {userProfile.country}</p>
      <p>Gender: {userProfile.gender}</p>
      <p>PAN: {userProfile.pan}</p>
      <li><Link to="/education">Education Details</Link></li>
    </div>
 
  );
};

export default Profile;
