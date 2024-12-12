const API_BASE_URL = 'https://jsonplaceholder.typicode.com';
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
    return fetch(`${API_BASE_URL}/posts`)
        .then(handleResponse)
        .catch(handleError);
};
// Servicio para obtener un post por ID
export const getPostById = (id) => {
    return fetch(`${API_BASE_URL}/posts/${id}`)
        .then(handleResponse)
        .catch(handleError);
};
// Servicio para obtener comentarios de un post
export const getCommentsByPostId = (postId) => {
    return fetch(`${API_BASE_URL}/posts/${postId}/comments`)
        .then(handleResponse)
        .catch(handleError);
};