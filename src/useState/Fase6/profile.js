import React, { useState } from 'react';
import './Profile.css';

function Profile({ url, name, email, bio, skills }) {
  const [isFavorite, setIsFavorite] = useState(false);

  function toggleFavorite() {
    setIsFavorite(!isFavorite);
  }

  return (
    <div
      className="profile"
      style={{
        backgroundColor: isFavorite ? 'green' : '#fff',
      }}
    >
      <img src={url} alt={`${name}'s profile`} className="profile-img" />
      <h2>{name}</h2>
      <p>{email}</p>
      <p>{bio}</p>
      <div className="skills">
        {skills.map((skill, index) => (
          <span key={index} className="skill-tag">{skill}</span>
        ))}
      </div>

      <button onClick={toggleFavorite}>
        {isFavorite ? 'Quitar Favorito' : 'Marcar como Favorito'}
      </button>
    </div>
  );
}

export default Profile;
