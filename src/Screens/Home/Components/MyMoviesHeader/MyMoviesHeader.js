import React from 'react';
import {View} from 'react-native';
import {Section} from 'MoviesApp/src/Components';
import theme from 'MoviesApp/src/Theme';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';
import {isFunction as _isFunction} from 'lodash';
const MyMoviesHeader = ({onAddNewMoviePress}) => (
  <View style={styles.container}>
    <Section title={'My Movies'} />
    <Ionicons
      name={'ios-add-circle-outline'}
      color={theme.addMovieIcon}
      onPress={() => _isFunction(onAddNewMoviePress) && onAddNewMoviePress()}
      size={25}
    />
  </View>
);

MyMoviesHeader.propTypes = {
  onAddNewMoviePress: PropTypes.func,
};
export default MyMoviesHeader;
