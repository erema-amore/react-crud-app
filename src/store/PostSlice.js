
import { createSlice } from '@reduxjs/toolkit';

const postsSlice = createSlice({
  name: 'posts',
  initialState: [],
  reducers: {
    addPost: (state, action) => {
      state.push(action.payload);
    },
    deletePost: (state, action) => {
      const postId = action.payload;
      return state.filter(post => post.id !== postId);
    },
    toggleLike: (state, action) => {
      const postId = action.payload;
      const post = state.find(post => post.id === postId);
      if (post) {
        post.isLiked = !post.isLiked;
      }
    },
   
    toggleFavorite: (state, action) => {
      const postId = action.payload;
      const post = state.find(post => post.id === postId);
      if (post) {
        post.isFavorite = !post.isFavorite;
      }
    },
    
    searchPosts: (state, action) => {
      const searchTerm = action.payload.toLowerCase();
      return state.map(post => ({
        ...post,
        visible: post.title.toLowerCase().includes(searchTerm),
      }));
    },
  },
});

export const {
  addPost,
  deletePost,
  toggleLike,
  toggleFavorite,
  searchPosts,
} = postsSlice.actions;

export default postsSlice.reducer;
