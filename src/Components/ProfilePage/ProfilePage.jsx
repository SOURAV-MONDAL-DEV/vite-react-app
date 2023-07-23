import React from 'react';
import cover from './img/cover.jpg';
import avatar from './img/avatar.png';
import './profile.css'; // Import the CSS file

const ProfilePage = () => {
  return (
    <div>
      {/* Cover Photo */}
      <div className="cover-container">
        <img className="cover-image" src={cover} />

        {/* Rounded Profile Picture */}
        <img className="profile-picture" src={avatar} />
      </div>

      {/* Person Information */}
      <div className="person-info-container">
        {/* Add your person information components here */}
        <div className="person-info-item">
          <div className="person-info-label">First Name:</div>
          <input type="text" placeholder="John" className="person-info-input" />
        </div>

        <div className="person-info-item">
          <div className="person-info-label">Last Name:</div>
          <input type="text" placeholder="Doe" className="person-info-input" />
        </div>

        <div className="person-info-item">
          <div className="person-info-label">Email:</div>
          <input type="email" placeholder="john.doe@example.com" className="person-info-input" />
        </div>

        <div className="person-info-item">
          <div className="person-info-label">Phone:</div>
          <input type="tel" placeholder="Phone number" className="person-info-input" />
        </div>

        <div className="person-info-item">
          <div className="person-info-label">DOB:</div>
          <input type="date" className="person-info-input" />
        </div>

        <div className="person-info-item">
          <div className="person-info-label">Last Qualification:</div>
          <input type="text" placeholder="Highest qualification" className="person-info-input" />
        </div>

        <div className="person-info-item">
          <div className="person-info-label">Occupation:</div>
          <input type="text" placeholder="Occupation" className="person-info-input" />
        </div>

        <div className="person-info-item">
          <div className="person-info-label">Address:</div>
          <input type="text" placeholder="Address" className="person-info-input" />
        </div>

        <div className="person-info-item">
          <div className="person-info-label">State:</div>
          <input type="text" placeholder="State" className="person-info-input" />
        </div>

        <div className="person-info-item">
          <div className="person-info-label">District:</div>
          <input type="text" placeholder="District" className="person-info-input" />
        </div>

        <div className="person-info-item">
          <div className="person-info-label">Pin:</div>
          <input type="text" placeholder="PIN code" className="person-info-input" />
        </div>

        <div className="person-info-item">
          <div className="person-info-label">Country:</div>
          <input type="text" placeholder="Country" className="person-info-input" />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
