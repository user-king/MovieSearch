import React from 'react';

const SearchForm = ({ query, setQuery, searchMovies }) => {
  return (
    <form onSubmit={searchMovies} className="search-form mb-4">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Search for a movie"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className="input-group-append">
          <button className="btn btn-primary" type="submit">Search</button>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;
