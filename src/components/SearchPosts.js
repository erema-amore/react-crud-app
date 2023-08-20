
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchPosts } from '../store/postsSlice'; 

const SearchPosts = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    dispatch(searchPosts(searchTerm));
  };

  return (
    <div className="container mt-4">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search by title"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <button className="btn btn-outline-secondary" onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
};

export default SearchPosts;
