import { useEffect, useState } from 'react';

import { fetchTrendingMovies } from 'Api';
import MoviesList from 'components/MoviesList/MoviesList';
import { Loader } from 'components/Loader/Loader';

const Home = () => {
  const [moviesData, setMoviesData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMovies() {
      setIsLoading(true);
      try {
        const response = await fetchTrendingMovies();
        setMoviesData(response.results);
      } catch (error) {
        setError(error);
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovies();
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      {isLoading && <Loader />}
      {error && <p>Error: {error.message}</p>}
      <MoviesList movies={moviesData} />
    </main>
  );
};

export default Home;
