import { Suspense, useEffect, useRef, useState } from 'react';
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import Error from 'components/Error/Error';
import { fetchMoviesById } from 'Api';
import { Loader } from 'components/Loader/Loader';
import getPoster from 'getDefaultImg';

import { AddInform, InformItems, BackLink } from './MovieDatail.styled';

const MoviesDetailes = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(false);
  const location = useLocation();

  useEffect(() => {
    async function fetchMovies() {
      try {
        const respInformationAboutMovie = await fetchMoviesById(movieId);
        setMovie(respInformationAboutMovie);
      } catch (error) {
        console.error(error);
        setError(true);
      }
    }
    fetchMovies();
  }, [movieId]);

  const backLinkLocatinRef = useRef(location.state?.from ?? '/');

  return (
    <>
      {error && <Error />}
      {movie && (
        <>
          <BackLink to={backLinkLocatinRef.current}>&#8592; Go back</BackLink>
          <div>
            <div>
              <h2>
                {movie.original_title}
                <span> ({movie.release_date.substr(0, [4])})</span>
              </h2>
              <img
                src={getPoster(movie.poster_path)}
                alt="Poster movie"
                width={'300px'}
              />
            </div>

            <div>
              <p>User Score: {movie.vote_average}</p>
              <div>
                <h3>Overview</h3>
                <p>{movie.overview}</p>
              </div>
              <div>
                <h3>Genres</h3>
                <ul>
                  {movie.genres.map(({ name }, id) => {
                    return <li key={id}>{name}</li>;
                  })}
                </ul>
              </div>
            </div>
          </div>
        </>
      )}

      {movie && (
        <div>
          <h3>Additional information</h3>
          <AddInform>
            <InformItems>
              <NavLink to="cast">Cast</NavLink>
            </InformItems>
            <InformItems>
              <NavLink to="reviews">Reviews</NavLink>
            </InformItems>
          </AddInform>
        </div>
      )}
      <Suspense
        fallback={
          <div>
            Loading subpage...
            <Loader />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
};

export default MoviesDetailes;
