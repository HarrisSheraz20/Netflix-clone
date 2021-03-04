import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
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
