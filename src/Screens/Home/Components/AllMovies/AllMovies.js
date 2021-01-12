import React, {useState} from 'react';
import {Section, MovieCard} from 'MoviesApp/src/Components';
import {FlatList, ActivityIndicator, Platform} from 'react-native';
import useFetchMovies from './useFetchMovies';
import theme from 'MoviesApp/src/Theme';
import {mapMovieObject} from './utils';

import styles from './styles';

const handleEndReached = (setPage) => () => {
  setPage((prevPage) => prevPage + 1);
};

const renderMovie = ({item: movie}) => {
  const mappedMovie = mapMovieObject(movie);
  return (
    <MovieCard containerStyle={styles.movieCardContainer} movie={mappedMovie} />
  );
};
const renderFooter = (isFetchingMovies) => {
  if (!isFetchingMovies) {
    return null;
  }
  return (
    <ActivityIndicator size="large" animating color={theme.loadingIndicator} />
  );
};

const handleKeyExtractor = (movie, index) => {
  return `${movie.id}${index}`;
};
const AllMovies = () => {
  const [page, setPage] = useState(1);
  const [movies, isFetchingMovies] = useFetchMovies(page);
  const onEndReachedThreshold = Platform.select({
    ios: 0,
    android: 5,
  });
  return (
    <>
      <Section title={'All Movies'} containerStyle={styles.section} />
      <FlatList
        data={movies}
        keyExtractor={handleKeyExtractor}
        onEndReached={handleEndReached(setPage)}
        onEndReachedThreshold={onEndReachedThreshold}
        renderItem={renderMovie}
        ListFooterComponent={renderFooter(isFetchingMovies)}
      />
    </>
  );
};
export {handleEndReached, renderMovie, renderFooter, handleKeyExtractor};
export default AllMovies;
