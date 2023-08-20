
import React from 'react';
import { useDispatch } from 'react-redux';
import { deletePost } from '../store/PostSlice';

const Post = ({ post }) => {
    const dispatch = useDispatch();
  
    const handleDelete = () => {
      dispatch(deletePost(post.id));
    };
  
    const handleLike = () => {
      
    };
  
    const handleFavorite = () => {
     
    };
  
    return (
      <div className="card mb-3">
        <img src={post.image} className="card-img-top" alt="Post" />
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.body}</p>
          <p className="card-text">Author: {post.author}</p>
          <p className="card-text">Published on: {post.date}</p>
          <p className="card-text">Likes: {post.likes}</p>
          <p className="card-text">{post.isFavorite ? 'Added to Favorites' : 'Not in Favorites'}</p>
          <button className={`btn ${post.isLiked ? 'btn-success' : 'btn-outline-success'}`} onClick={handleLike}>
            {post.isLiked ? 'Unlike' : 'Like'}
          </button>
          <button className={`btn ${post.isFavorite ? 'btn-primary' : 'btn-outline-primary'}`} onClick={handleFavorite}>
            {post.isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
          </button>
          <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
        </div>
      </div>
    );
  };
  

export default Post;
