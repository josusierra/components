import React, { useState, useEffect } from 'react';
import { getPosts } from './apiService';
const PostList = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        getPosts()
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
            <h1>Posts</h1>
            {loading ? (
                <p>Cargando...</p>
            ) : (
                <ul>
                    {posts.map(post => (
                        <li key={post.id}>
                            <strong>{post.title}</strong>
                            <p>{post.body}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
export default PostList;