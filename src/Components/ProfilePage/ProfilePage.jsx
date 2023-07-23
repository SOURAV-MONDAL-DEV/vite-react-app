import React from 'react';
import cover from './img/cover.jpg'
import avatar from './img/avatar.png'

const ProfilePage = () => {
  return (
    <div>
      {/* Cover Photo */}
      <div
        style={{
          width: '100%',
          height: '250px',
          position: 'relative',
        }}
      >
        <img 
          style={{
          width: '100%',
          height: '250px',
          objectFit:"cover",
          borderRadius:"20px"
          }}
          src={cover} />

        {/* Rounded Profile Picture */}
        < img
            style={{
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            // backgroundColor: '#ccc',
            position: 'absolute',
            bottom: '-50px',
            left: '20%', 
            transform: 'translateX(-50%)',
            border: '3px solid #fff',
          }}
          src={avatar}
        />
      </div>

      {/* Person Information */}
      <div
        style={{
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#fff',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Add your person information components here */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <div style={{ width: '150px', textAlign: 'start', fontSize: '18px' }}>First Name:</div>
          <input type="text" placeholder="John" style={{ width: '300px', height: '40px' }} />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <div style={{ width: '150px', textAlign: 'start', fontSize: '18px' }}>Last Name:</div>
          <input type="text" placeholder="Doe" style={{ width: '300px', height: '40px' }} />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <div style={{ width: '150px', textAlign: 'start', fontSize: '18px' }}>Email:</div>
          <input type="email" placeholder="john.doe@example.com" style={{ width: '300px', height: '40px' }} />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <div style={{ width: '150px', textAlign: 'start', fontSize: '18px' }}>Phone:</div>
          <input type="tel" placeholder="Phone number" style={{ width: '300px', height: '40px' }} />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <div style={{ width: '150px', textAlign: 'start', fontSize: '18px' }}>DOB:</div>
          <input type="date" style={{ width: '300px', height: '40px' }} />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <div style={{ width: '150px', textAlign: 'start', fontSize: '18px' }}>Last Qualification:</div>
          <input type="text" placeholder="Highest qualification" style={{ width: '300px', height: '40px' }} />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <div style={{ width: '150px', textAlign: 'start', fontSize: '18px' }}>Occupation:</div>
          <input type="text" placeholder="Occupation" style={{ width: '300px', height: '40px' }} />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <div style={{ width: '150px', textAlign: 'start', fontSize: '18px' }}>Address:</div>
          <input type="text" placeholder="Address" style={{ width: '300px', height: '40px' }} />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <div style={{ width: '150px', textAlign: 'start', fontSize: '18px' }}>State:</div>
          <input type="text" placeholder="State" style={{ width: '300px', height: '40px' }} />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <div style={{ width: '150px', textAlign: 'start', fontSize: '18px' }}>District:</div>
          <input type="text" placeholder="District" style={{ width: '300px', height: '40px' }} />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <div style={{ width: '150px', textAlign: 'start', fontSize: '18px' }}>Pin:</div>
          <input type="text" placeholder="PIN code" style={{ width: '300px', height: '40px' }} />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <div style={{ width: '150px', textAlign: 'start', fontSize: '18px' }}>Country:</div>
          <input type="text" placeholder="Country" style={{ width: '300px', height: '40px' }} />
        </div>

      </div>
    </div>
  );
};

export default ProfilePage;
