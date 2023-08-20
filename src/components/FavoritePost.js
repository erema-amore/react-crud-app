
import React from 'react';
import { useSelector } from 'react-redux';
import Post from '../components/Post';

const FavoritePosts = () => {
  const favoritePosts = useSelector(state => state.posts.filter(post => post.isFavorite));

  return (
    <div className="container mt-4">
      <h2>Favorite Posts</h2>
      {favoritePosts.length === 0 ? (
        <p>No favorite posts yet.</p>
      ) : (
        favoritePosts.map(post => (
          <Post key={post.id} post={post} />
        ))
      )}
    </div>
  );
};

export default FavoritePosts;
