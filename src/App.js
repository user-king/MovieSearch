import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import SearchForm from './components/SearchForm';
import MovieCard from './components/MovieCard';
import MovieDetailsModal from './components/MovieDetailsModal';
import * as Loader from 'react-loader-spinner';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


function App() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [modalOpen, setModalOpen] = useState(false); 

  const searchMovies = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await axios.get(`http://www.omdbapi.com/?apikey=796184f5&s=${query}`);
      if (response.status === 200 && response.data.Response === 'True') {
        setMovies(response.data.Search);
      } else {
        setError(response.data.Error || 'No movies found');
        setMovies([]);
      }
    } catch (error) {
      setError('An error occurred. Please try again later.');
      setMovies([]);
      console.error(error);
    }

    setLoading(false);
  };

  const openMovieDetails = async (imdbID) => {
    setLoading(true);
    setError('');
    setModalOpen(true); 
    try {
      const response = await axios.get(`http://www.omdbapi.com/?apikey=796184f5&i=${imdbID}`);
      if (response.status === 200 && response.data.Response === 'True') {
        setSelectedMovie(response.data);
      } else {
        setError(response.data.Error);
        setSelectedMovie('');
      }
    } catch (error) {
      setError('An error occurred. Please try again later.');
      console.error(error);
    }

    setLoading(false);
  };

  const closeMovieDetails = () => {
    setSelectedMovie(null);
    setModalOpen(false);
  };

  return (
    <div className="container">
      <h1 className="my-4">Movie Search App</h1>
      <SearchForm query={query} setQuery={setQuery} searchMovies={searchMovies} />
      {loading && <Loader.Circles type="Circles" color="#00BFFF" height={100} width={100} />}

      {error && <p className="text-danger">{error}</p>}
      <div className="row">
      {!modalOpen && movies.map(movie => (
        <div key={movie.imdbID} className={`col-md-4 mb-4 ${modalOpen ? 'scrollable': ''}`}>
          <MovieCard
            title={movie.Title}
            year={movie.Year}
            imdbID={movie.imdbID}
            type={movie.Type}
            image={movie.Poster}
            onClick={() => openMovieDetails(movie.imdbID)}
          />
        </div>
      ))}
      </div>
      <div>
        
      </div>
      {selectedMovie && (
        <MovieDetailsModal
          movie={selectedMovie}
          onClose={closeMovieDetails}
          loading={loading}
          error={error}
        />
      )}
    </div>
  );
}

export default App;
