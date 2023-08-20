
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../store/PostSlice'; 

const AddPostForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (title && body) {
      dispatch(addPost({ title, body }));
      setTitle('');
      setBody('');
    }
  };

  return (
    <div className="container mt-4">
      <h2>Add New Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">Body</label>
          <textarea
            className="form-control"
            id="body"
            value={body}
            onChange={e => setBody(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Add Post</button>
      </form>
    </div>
  );
};

export default AddPostForm;
