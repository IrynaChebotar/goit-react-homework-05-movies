import { NavLink, useLocation } from 'react-router-dom';
import { MoviesListContainer, MovieItem } from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <div>
      <MoviesListContainer>
        {movies.map(movie => {
          return (
            <MovieItem key={movie.id}>
              <NavLink to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </NavLink>
            </MovieItem>
          );
        })}
      </MoviesListContainer>
    </div>
  );
};

export default MoviesList;
