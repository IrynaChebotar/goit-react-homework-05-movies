import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchMoviesBySearch } from 'Api';
import MoviesList from 'components/MoviesList/MoviesList';
import { Loader } from 'components/Loader/Loader';
import {
  SearchContainer,
  SearchForm,
  SearchInput,
  SearchButton,
} from './Movies.styled';

const Movies = () => {
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearchChange = e => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = e => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      return;
    }
    navigate(`/movies?query=${searchQuery}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (!searchQuery) {
        return;
      }

      setIsLoading(true);

      try {
        const resp = await fetchMoviesBySearch(searchQuery);
        setSearchResults(resp.results);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [searchQuery]);

  return (
    <main>
      <h1>Search Movies</h1>
      <SearchContainer>
        <SearchForm onSubmit={handleSearchSubmit}>
          <SearchInput
            type="text"
            placeholder="Search for a movie..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <SearchButton type="submit">Search</SearchButton>
        </SearchForm>
      </SearchContainer>
      {isLoading ? <Loader /> : <MoviesList movies={searchResults} />}
    </main>
  );
};

export default Movies;
