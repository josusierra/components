import React, { useState, useEffect } from 'react';

function App() {
  const [mostrar, setMostrar] = useState(false);
  const [formData, setFormData] = useState({
    id: "",
    firstName: "",
    email: ""
  });
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  }

  function alternarMostrar(event) {
    event.preventDefault();
    setMostrar(!mostrar);
  }

  useEffect(() => {
    fetch('server/datos.json/books')
      .then(response => response.json())
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Lista de Posts</h1>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              {post.title}
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}

      <h2>Formulario</h2>
      <form>
        <input type="number" name="id" value={formData.id} onChange={handleChange} />
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange}/>
        <input type="email" name="email" value={formData.fecha} onChange={handleChange}/>
        <input type="text" name="pages" value={formData.pages} onChange={handleChange} />

        <button onClick={alternarMostrar}>Mostrar/Ocultar</button>
      </form>

      {mostrar && (
        <div>
          <p>ID: {formData.id}</p>
          <p>Title: {formData.firstName}</p>
          <p>Fecha: {formData.fecha}</p>
          <p>pages: {formData.pages}</p>
        </div>
      )}
    </div>
  );
}
export default App;