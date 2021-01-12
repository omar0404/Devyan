import {POSTER_BASE_URL} from 'MoviesApp/src/Config';

const mapMovieObject = (movie) => {
  return {
    title: movie.title,
    posterUri: `${POSTER_BASE_URL}${movie.poster_path}`,
    overview: movie.overview,
    date: movie.release_date,
  };
};
export {mapMovieObject};
