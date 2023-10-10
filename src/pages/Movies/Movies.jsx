import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesBySearch } from 'Api';
import MoviesList from 'components/MoviesList/MoviesList';
import { SearchInput } from './Movies.styled';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');
  const [valueSearchMovies, setValueSearchMovies] = useState([]);

  useEffect(() => {
    if (!searchQuery) return;

    async function searchMovies() {
      try {
        const resp = await fetchMoviesBySearch(searchQuery);
        setValueSearchMovies(resp.results);
      } catch (error) {
        console.error(error);
      }
    }
    searchMovies();
  }, [searchQuery]);

  const handleSubmitForm = e => {
    e.preventDefault();
    setSearchParams({ query: e.target.searchMovies.value });
    e.target.reset();
  };

  return (
    <>
      <h2>Search movies</h2>
      <form onSubmit={handleSubmitForm}>
        <label htmlFor="searchMovies">
          <SearchInput
            id="searchMovies"
            name="searchMovies"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies for name..."
          />
        </label>
      </form>
      <MoviesList movies={valueSearchMovies} />
    </>
  );
};

export default Movies;
