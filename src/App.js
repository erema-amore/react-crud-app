// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AddPostForm from './components/AddPostForm';
import PostList from './components/PostList';
import FavoritePosts from './components/FavoritePost';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/add-post" component={AddPostForm} />
        <Route path="/favorites" component={FavoritePosts} />
        <Route path="/" component={PostList} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
