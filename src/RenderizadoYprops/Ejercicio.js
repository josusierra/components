import React from 'react';

function Profile({ imageUrl, name, email, bio, skills }) {
  return (
    <div className="profile">
      <img src={imageUrl} alt={name} />
      <h2>{name}</h2>
      <p>{email}</p>
      <p>{bio}</p>
      
      <h4>Habilidades:</h4>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default Profile;
