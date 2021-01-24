import React, {useEffect} from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

import styles from './styles';
import theme from '../../Theme';
const renderMovieDetailItem = (key, value) => (
  <>
    <Text style={style.key}>{key}: </Text>
    <Text style={style.value}>{value} </Text>
  </>
);
const BorderSeparator = ({children}) => {
  return children.map((child, index) => (
    <View key={index} style={style.detailItemContainer(index)}>
      {child}
    </View>
  ));
};
const Movie = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {movie} = route.params || {};
  const {
    posterUri,
    title,
    overview,
    date,
    voteCount,
    voteAverage,
    originalLanguage,
  } = movie;
  useEffect(() => {
    navigation.setOptions({title});
  }, []);
  return (
    <View style={styles.container}>
      <Image source={{uri: posterUri}} style={{height: 200}} />
      <View style={style.movieDetailsContainer}>
        <Text style={style.title}>{title}</Text>
        <Text style={style.overview}>{overview}</Text>
        <BorderSeparator>
          {renderMovieDetailItem('Vote Count', voteCount)}
          {renderMovieDetailItem('Vote Average', voteAverage)}
          {renderMovieDetailItem('language', originalLanguage)}
          {renderMovieDetailItem('Date', date)}
        </BorderSeparator>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  title: {
    color: theme.text.primary,
    fontSize: 20,
  },
  overview: {
    color: theme.text.secondary,
    fontSize: 17,
    marginTop: 12,
  },
  movieDetailsContainer: {
    marginTop: 20,
    padding: 10,
  },
  key: {
    color: theme.text.teritary,
    fontSize: 14,
    fontWeight: 'bold',
  },
  value: {
    color: theme.text.secondary,
    fontSize: 14,
    fontWeight: 'bold',
  },
  detailItemContainer: (itemIndex) => ({
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    borderTopWidth: itemIndex % 2 != 0 ? 0 : 0.3,
    borderBottomWidth: itemIndex % 2 != 0 ? 0 : 0.3,
    borderColor: theme.movieDetailItemBorder,
    height: itemIndex % 2 ? 30 : 60,
  }),
});
export default Movie;
