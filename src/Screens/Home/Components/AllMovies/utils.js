import {POSTER_BASE_URL} from 'Devyan/src/Config';
const mapMovieObject = (movie) => {
  return {
    title: movie.title,
    posterUri: `${POSTER_BASE_URL}${movie.posterPath}`,
    overview: movie.overview,
    date: movie.releaseDate,
    ...movie,
  };
};
export {mapMovieObject};
