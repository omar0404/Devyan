import React from 'react';
import {View, Text, ScrollView, ImageSourcePropType} from 'react-native';
import {isEmpty as _isEmpty, map as _map} from 'lodash';
import PropTypes from 'prop-types';
import styles from './styles';
import {MovieCard} from 'Devyan/src/Components';

const renderMovie = (movie, onUnLikePress, onMoviePress) => {
  return (
    <MovieCard
      onPress={() => onMoviePress(movie)}
      onLikePress={() => onUnLikePress(movie)}
      key={movie.id}
      movie={movie}
      isLiked
    />
  );
};
const UserMovies = ({movies, onUnLikePress, onMoviePress}) => {
  const hasMovies = !_isEmpty(movies);
  if (!hasMovies) {
    return (
      <View style={styles.noMoviesContainer}>
        <Text testID={'noMoviesAdded'} style={styles.noMoviesText}>
          No Movies Added
        </Text>
      </View>
    );
  }
  return (
    <ScrollView style={styles.moviesContainer} horizontal>
      {_map(movies, (movie) => renderMovie(movie, onUnLikePress, onMoviePress))}
    </ScrollView>
  );
};
UserMovies.propTypes = {
  onUnLikePress: PropTypes.func,
  onMoviePress: PropTypes.func,
  movies: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.shape({
      id: PropTypes.string,
      posterUri: ImageSourcePropType,
      title: PropTypes.string,
      overview: PropTypes.string,
      date: PropTypes.string,
    }),
  ]),
};
export default UserMovies;
