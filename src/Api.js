import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

axios.defaults.params = {
  api_key: '43e217b4553de5e9208943c50ad987df',
};

export async function fetchTrendingMovies() {
  try {
    const resp = await axios.get(`trending/movie/day`);
    return resp.data;
  } catch (error) {
    throw error;
  }
}

export async function fetchMoviesById(moviesId) {
  try {
    const resp = await axios.get(`/movie/${moviesId}?&language=en-US`);
    return resp.data;
  } catch (error) {
    throw error;
  }
}

export async function fetchMoviesBySearch(searchQuery) {
  try {
    const resp = await axios.get(`search/movie?query=${searchQuery}`);
    return resp.data;
  } catch (error) {
    throw error;
  }
}

export async function fetchCastMovie(moviesId) {
  try {
    const resp = await axios.get(`movie/${moviesId}/credits`);
    return resp.data;
  } catch (error) {
    throw error;
  }
}

export async function fetchReviewsMovie(moviesId) {
  try {
    const resp = await axios.get(`movie/${moviesId}/reviews`);
    return resp.data;
  } catch (error) {
    throw error;
  }
}
