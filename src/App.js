import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import MovieList from './components/MovieList';
import MetaTags from 'react-meta-tags';

function App() {
  return (
    <div className="App">
      <MetaTags>
        <title>React-Redux-Saga App</title>
        <meta
          id="meta-description"
          name="description"
          content="React-Redux-Saga Web Application for API Call."
        />
        <meta
          id="og-title"
          property="og:title"
          content="React-Redux-Saga Web Application for API Call"
        />
      </MetaTags>
      <Navbar />
      <MovieList />
    </div>
  );
}

export default App;
