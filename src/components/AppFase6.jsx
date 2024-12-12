import React, { useState } from 'react';

const Profile = ({ profile }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite((prev) => !prev);
  };

  return (
    <div>
      <h2>{profile.name}</h2>
      <p>Email: {profile.email}</p>
      <p>Bio: {profile.bio}</p>
      <p>Skills: {profile.skills.join(', ')}</p>
      <button onClick={toggleFavorite}>
        {isFavorite ? 'Unmark Favorite' : 'Mark as Favorite'}
      </button>
    </div>
  );
};

const ProfileList = ({ profiles }) => {
  return (
    <div>
      {profiles.map((profile) => (
        <Profile key={profile.id} profile={profile} />
      ))}
    </div>
  );
};

const App = () => {
  const profiles = [
    {
      id: 1,
      name: 'John Doe',
      email: 'johndoe@example.com',
      bio: 'Software developer with a passion for React.',
      skills: ['JavaScript', 'React', 'CSS'],
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'janesmith@example.com',
      bio: 'Frontend developer specializing in UX design.',
      skills: ['HTML', 'CSS', 'UX Design'],
    },
  ];

  return (
    <div>
      <h1>Profiles</h1>
      <ProfileList profiles={profiles} />
    </div>
  );
};

export default App;
