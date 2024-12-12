import React, { useState, useEffect } from 'react';

const URL = 'http://localhost:3001/profiles';




const handleResponse = (response) => {
  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }
  return response.json();
};

const handleError = (error) => {
  console.error('Error de llamar a la Api:', error);
  throw error;
};

const getPosts = () => {
  return fetch(`${URL}`)
    .then(handleResponse)
    .catch(handleError);
};

const addProfile = (profile) => {
  return fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(profile),
  })
    .then(handleResponse)
    .catch(handleError);
};

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    getPosts()
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error en el fetch:', error);
        setError('fallo al cargar datos');
        setLoading(false);
      });
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newProfile = Object.fromEntries(formData.entries());
    newProfile.skills = newProfile.skills.split(',').map(skill => skill.trim());

    addProfile(newProfile)
      .then(createdProfile => {
        console.log('Perfil creado:', createdProfile);
        setPosts(prevPosts => [...prevPosts, createdProfile]);
        e.target.reset();
      })
      .catch(error => {
        console.error('Error con el perfil:', error);
      });
  };


  return (
    <div>
      <h1>Perfiles</h1>
      {loading ? (
        <p>Cargando...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div>
          <form id="userForm" onSubmit={handleFormSubmit}>
            <label htmlFor="username">Usuario:</label>
            <input type="text" id="username" name="username"/>

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email"/>

            <label htmlFor="bio">Bio:</label>
            <input type="text" id="bio" name="bio"/>

            <label htmlFor="skills">Skills:</label>
            <input type="text" id="skills" name="skills"/>

            <button type="submit">Crear</button>
          </form>

          <div className="profiles">
            {posts.map(post => (
              <div key={post.id} className="profile-card">
                <h2>Name: {post.username}</h2>
                <p>Email: {post.email}</p>
                <p>Bio: {post.bio}</p>
                <p>Skills: {post.skills.join(', ')}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PostList;