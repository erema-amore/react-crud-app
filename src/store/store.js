import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../store/PostSlice';

const store = configureStore({
  reducer: {
    posts: postsReducer, 
  },
  
});

export default store;
