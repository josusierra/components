import React from 'react';
import Profile from './Profile';

const profilesData = [
  {
    imageUrl: 'https://via.placeholder.com/100',
    name: 'John Doe',
    email: 'johndoe@example.com',
    bio: 'Software developer with a passion for building web applications using JavaScript and React.',
    skills: ['JavaScript', 'React', 'CSS']
  },
  {
    imageUrl: 'https://via.placeholder.com/100',
    name: 'Jane Smith',
    email: 'janesmith@example.com',
    bio: 'Frontend developer specializing in HTML, CSS, and UX design.',
    skills: ['HTML', 'CSS', 'UX Design']
  },
  {
    imageUrl: 'https://via.placeholder.com/100',
    name: 'Michael Brown',
    email: 'michaelbrown@example.com',
    bio: 'Full-stack developer focusing on Node.js and database management.',
    skills: ['Node.js', 'MongoDB', 'SQL']
  }
];

function App() {
  return (
    <div className="app">
      <h1>Profiles</h1>
      
      {/* Renderiza dinámicamente los perfiles */}
      {profilesData.map((profile, index) => (
        <Profile
          key={index}
          imageUrl={profile.imageUrl}
          name={profile.name}
          email={profile.email}
          bio={profile.bio}
          skills={profile.skills}
        />
      ))}
    </div>
  );
}

export default App;
