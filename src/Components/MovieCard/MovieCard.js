import React from 'react';
import {View, Text, Image, ViewPropTypes} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';
import PosterPlaceHodler from '../PosterPlaceHolder';
const MovieCard = ({movie, containerStyle}) => {
  const {posterUri, title, overview, date} = movie || {};
  return (
    <View style={[styles.container, containerStyle]}>
      {posterUri ? (
        <Image source={{uri: posterUri}} style={styles.poster} />
      ) : (
        <PosterPlaceHodler />
      )}
      <View style={styles.detailsContainer}>
        <View style={styles.titleDateContainer}>
          <Text numberOfLines={1} style={styles.title}>
            {title}
          </Text>
          <Text numberOfLines={1} style={styles.date}>
            {date}
          </Text>
        </View>
        <Text numberOfLines={3} style={styles.overview}>
          {overview}
        </Text>
      </View>
    </View>
  );
};
MovieCard.propTypes = {
  movie: PropTypes.shape({
    posterUri: PropTypes.string,
    title: PropTypes.string,
    overview: PropTypes.string,
    date: PropTypes.string,
  }),
  containerStyle: ViewPropTypes.style,
};
export default MovieCard;
