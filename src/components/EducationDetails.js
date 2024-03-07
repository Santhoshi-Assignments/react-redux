import { Link } from 'react-router-dom';
import React from 'react';
import { useSelector } from 'react-redux';

const EducationDetails = () => {
  const educationDetails = useSelector((state) => state.user.education);

  return (
    <div className="education-details-container">
      <h2>Education Details</h2>
      <div>
        <h3>10th Grade</h3>
        <p>Institute Name: {educationDetails.tenth.instituteName}</p>
        <p>CGPA: {educationDetails.tenth.cgpa}</p>
      </div>
      <div>
        <h3>Higher Secondary</h3>
        <p>Institute Name: {educationDetails.higherSecondary.instituteName}</p>
        <p>CGPA: {educationDetails.higherSecondary.cgpa}</p>
      </div>
      <div>
        <h3>Graduation</h3>
        <p>Institute Name: {educationDetails.graduation.instituteName}</p>
        <p>CGPA: {educationDetails.graduation.cgpa}</p>
      </div>
      <li><Link to="/certifications">Certifications</Link></li>
    </div>

  );
};

export default EducationDetails;
