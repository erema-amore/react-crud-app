
import React from 'react';
import { useSelector } from 'react-redux';
import Post from './Post'; 

const PostList = () => {
  const posts = useSelector(state => state.posts);

  return (
    <div className="container mt-4">
      <h2>Posts</h2>
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
