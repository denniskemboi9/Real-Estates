import React, { useState } from 'react';
import './profile.css';

const CreateProfile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  const [profileImage, setProfileImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    

    setName('');
    setEmail('');
    setBio('');
    setProfileImage(null);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProfileImage(file);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Create Your Profile</h2>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="bio">Bio:</label>
        <textarea
          id="bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        ></textarea>
      </div>
      <div>
        <label htmlFor="profileImage">Profile Image:</label>
        <input
          type="file"
          id="profileImage"
          accept="image/*"
          onChange={handleImageChange}
        />
      </div>
      <button type="submit">Create Profile</button>
    </form>
  );
};

export default CreateProfile;



