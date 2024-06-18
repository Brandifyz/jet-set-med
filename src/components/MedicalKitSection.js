import React from 'react';
import '../styles/medicalKitSection.css';
import medicalKit from '../assets/image/medicalKit.png';

const MedicalKitSection = () => {
  return (
    <div className="medical-kit-section">
      <h1>Explore Our Medical Kit</h1>
      <p>Stranded on a deserted island? Don’t fear our med kit is here</p>
      <div className="kit-image-container">
        <img src={medicalKit} alt="Medical Kit" />
      </div>
    </div>
  );
};

export default MedicalKitSection;
