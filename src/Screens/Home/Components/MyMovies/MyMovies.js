import React, {Component} from 'react';
import {View, ImageSourcePropType} from 'react-native';
import Header from '../MyMoviesHeader';
import UserMovies from '../UserMovies';
import PropTypes from 'prop-types';
class MyMovies extends Component {
  render() {
    const {movies, onUnLikePress, onMoviePress} = this.props;
    return (
      <View>
        <Header />
        <UserMovies
          movies={movies}
          onMoviePress={onMoviePress}
          onUnLikePress={onUnLikePress}
        />
      </View>
    );
  }
}
MyMovies.propTypes = {
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
  onUnLikePress: PropTypes.func,
  onMoviePress: PropTypes.func,
};
export default MyMovies;
