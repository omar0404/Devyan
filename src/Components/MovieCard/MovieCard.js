import React from 'react';
import {View, Text, Image, ViewPropTypes, TouchableOpacity} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';
import PosterPlaceHodler from '../PosterPlaceHolder';
import Icon from 'react-native-vector-icons/MaterialIcons';
const MovieCard = ({onPress, movie, containerStyle, isLiked, onLikePress}) => {
  const {posterUri, title, overview, date} = movie || {};
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, containerStyle]}>
      {posterUri ? (
        <Image source={{uri: posterUri}} style={styles.poster} />
      ) : (
        <PosterPlaceHodler />
      )}
      <View style={styles.detailsContainer}>
        <View style={styles.titleDateContainer}>
          <Text numberOfLines={1} style={styles.title}>
            {title}
            <Text> </Text>
            <Text numberOfLines={1} style={styles.date}>
              {date}
            </Text>
          </Text>
          <Icon
            onPress={onLikePress}
            name={isLiked ? 'favorite' : 'favorite-border'}
            color={isLiked ? 'red' : 'white'}
            size={30}
          />
        </View>
        <Text numberOfLines={3} style={styles.overview}>
          {overview}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
MovieCard.propTypes = {
  isLiked: PropTypes.bool,
  onLikePress: PropTypes.func,
  onPress: PropTypes.func,
  movie: PropTypes.shape({
    posterUri: PropTypes.string,
    title: PropTypes.string,
    overview: PropTypes.string,
    date: PropTypes.string,
  }),
  containerStyle: ViewPropTypes.style,
};
export default MovieCard;
