import React, {Component} from 'react';
import {View} from 'react-native';
import Header from '../MyMoviesHeader';
import UserMovies from '../UserMovies';
import withNaviagtion from 'MoviesApp/src/Navigation/withNavigation';
import PropTypes from 'prop-types';
class MyMovies extends Component {
  state = {
    movies: [],
  };
  componentDidUpdate(prevProps) {
    const prevNavigationParams = prevProps.navigationParams;
    const currentNavigationParams = this.props.navigationParams;
    const {addedMovie: prevAddedMovie} = prevNavigationParams || {};
    const {addedMovie: currentAddedMovie} = currentNavigationParams || {};
    if (prevAddedMovie != currentAddedMovie) {
      this.handleUpdateMovies(currentAddedMovie);
    }
  }
  handleUpdateMovies = (currentAddedMovie) => {
    this.setState((prevState) => ({
      movies: [...prevState.movies, currentAddedMovie],
    }));
  };
  handleAddNewMoviePress = () => {
    const {navigation} = this.props;
    navigation.navigate('AddMovie');
  };
  render() {
    const {movies} = this.state;
    return (
      <View>
        <Header onAddNewMoviePress={this.handleAddNewMoviePress} />
        <UserMovies movies={movies} />
      </View>
    );
  }
}
MyMovies.propTypes = {
  navigationParams: PropTypes.object,
  navigation: PropTypes.object,
};
export {MyMovies};
export default withNaviagtion(MyMovies);
