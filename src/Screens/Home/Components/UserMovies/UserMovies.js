import React from 'react';
import {View, Text, ScrollView, ImageSourcePropType} from 'react-native';
import {isEmpty as _isEmpty, map as _map} from 'lodash';
import PropTypes from 'prop-types';
import styles from './styles';
import {MovieCard} from 'MoviesApp/src/Components';

const renderMovie = (movie, index) => (
  // used index as key not unique key as there is no re-order or update to movie component
  <MovieCard key={index} movie={movie} />
);
const UserMovies = ({movies}) => {
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
      {_map(movies, renderMovie)}
    </ScrollView>
  );
};
UserMovies.propTypes = {
  movies: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.objectOf({
      posterUri: ImageSourcePropType,
      title: PropTypes.string,
      overview: PropTypes.string,
      date: PropTypes.string,
    }),
  ]),
};
export default UserMovies;
