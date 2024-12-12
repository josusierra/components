
const API_BASE_URL = 'http://localhost:3001/profiles';
// Función para manejar respuestas
const handleResponse = (response) => {
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
};
// Función para manejar errores
const handleError = (error) => {
  console.error('API call failed:', error);
  throw error; // Relanza el error para que pueda ser gestionado por el componente
};
// Servicio para obtener todos los posts
export const getPosts = () => {
  return fetch(`${API_BASE_URL}/id`)
    .then(handleResponse)
    .catch(handleError);
};
// Servicio para obtener un post por ID
export const getPostById = (id) => {
  return fetch(`http://localhost:3001/profiles/${id}`)
    .then(handleResponse)
    .catch(handleError);
};
// Servicio para obtener comentarios de un post
export const getCommentsByPostId = (id) => {
  return fetch(`http://localhost:3001/profiles/id`)
    .then(handleResponse)
    .catch(handleError);
};