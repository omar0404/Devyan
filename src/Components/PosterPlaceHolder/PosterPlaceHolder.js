import React from 'react';
import {View, ViewPropTypes} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './styles';
const PosterPlaceHolder = ({containerStyle}) => (
  <View style={[styles.container, containerStyle]}>
    <Entypo name={'image'} size={50} color={'gray'} />
  </View>
);
PosterPlaceHolder.propTypes = {
  containerStyle: ViewPropTypes,
};
export default PosterPlaceHolder;
