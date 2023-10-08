import { Link } from 'react-router-dom';
import React from 'react';
import {
  MovieImage,
  MovieItem,
  MoviesListContainer,
  MovieTitle,
  ReleaseDate,
} from './MoviesList.styled';

const MoviesList = ({ movies }) => (
  <MoviesListContainer>
    <h2>Movies</h2>
    <ul>
      {movies.map(movie => (
        <Link to={`/movies/${movie.id}`}>
          <MovieItem key={movie.id}>
            <MovieImage
              src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
              alt={movie.title}
            />
            <MovieTitle>{movie.title}</MovieTitle>
            <ReleaseDate>Release Date: {movie.release_date}</ReleaseDate>
          </MovieItem>
        </Link>
      ))}
    </ul>
  </MoviesListContainer>
);

export default MoviesList;
