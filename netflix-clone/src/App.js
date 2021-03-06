import React from 'react'
import Row from './Components/Row/Row.js'
import requests from './requests'
import "./App.css"
import Banner from './Components/Banner/Banner'


function App() {
  return (
    <div className="App">
      {/* Nav */}
      
      <Banner />

      <Row title="NETFLIX ORIGINAL" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title="Top rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
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
