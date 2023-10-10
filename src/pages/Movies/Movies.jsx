import React, { useEffect, useState, useRef } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { fetchMoviesBySearch } from 'Api';
import MoviesList from 'components/MoviesList/MoviesList';
import { SearchInput } from './Movies.styled';
import { BackLink } from 'pages/MovieDetails/MovieDatail.styled';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');
  const [valueSearchMovies, setValueSearchMovies] = useState([]);
  const location = useLocation();

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
  const backLinkLocatinRef = useRef(location.state?.from ?? '/');

  return (
    <>
      <BackLink to={backLinkLocatinRef.current}>&#8592; Go back</BackLink>
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
