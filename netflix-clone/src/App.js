import React from 'react'
import Row from './Components/Row/Row.js'
import './App.css';
import requests from './requests'

function App() {
  return (
    <div className="App">
      <h1>hello world</h1>
      <Row title="NETFLIX ORIGINAL" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
    </div>
  );
}

export default App;


// This is the API key to all the movies
// a704338c2463691df9a73198b0182028

// Example API Request
// https://api.themoviedb.org/3/movie/550?api_key=a704338c2463691df9a73198b0182028

// API Read Access Token (v4 auth)
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNzA0MzM4YzI0NjM2OTFkZjlhNzMxOThiMDE4MjAyOCIsInN1YiI6IjYwNDBmMDUzN2VjZDI4MDA0MzBkMDNmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZFXMmvTLpDIqpAocd0qpc3vLqXS6hbEPM25TeEONy9A
