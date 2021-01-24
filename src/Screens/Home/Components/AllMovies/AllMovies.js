import React, {useState} from 'react';
import {Section, MovieCard} from 'Devyan/src/Components';
import {FlatList, ActivityIndicator, Platform, TextInput} from 'react-native';
import useFetchMovies from './useFetchMovies';
import theme from 'Devyan/src/Theme';
import {mapMovieObject} from './utils';
import PropTypes from 'prop-types';
import styles from './styles';

const handleEndReached = (setPage) => () => {
  setPage((prevPage) => prevPage + 1);
};

const renderMovie = (onLikePress, likedMovies, onMoviePress) => ({
  item: movie,
}) => {
  const mappedMovie = mapMovieObject(movie);
  return (
    <MovieCard
      onPress={() => onMoviePress(mappedMovie)}
      isLiked={likedMovies[movie.id]}
      onLikePress={() => onLikePress(mappedMovie)}
      containerStyle={styles.movieCardContainer}
      movie={mappedMovie}
    />
  );
};
const renderHeader = (setSearchQuery, setPage) => {
  return (
    <TextInput
      style={styles.textInput}
      placeholderTextColor={theme.textInput.placeHolderColor}
      placeholder={'Search..'}
      onChangeText={(val) => {
        setSearchQuery(val);
        setPage(1);
      }}
    />
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

const handleKeyExtractor = (movie) => {
  return movie.id;
};
const AllMovies = ({onLikePress, likedMovies, onMoviePress}) => {
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, isFetchingMovies] = useFetchMovies(page, searchQuery);
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
        renderItem={renderMovie(onLikePress, likedMovies, onMoviePress)}
        ListHeaderComponent={renderHeader(setSearchQuery, setPage)}
        ListFooterComponent={renderFooter(isFetchingMovies)}
      />
    </>
  );
};
AllMovies.propTypes = {
  likedMovies: PropTypes.shape({
    [PropTypes.number]: PropTypes.object,
  }),
  onLikePress: PropTypes.func,
  onMoviePress: PropTypes.func,
};
export {handleEndReached, renderMovie, renderFooter, handleKeyExtractor};
export default AllMovies;
