import React from 'react';
import {View, Text, ViewPropTypes} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';
const Section = ({title, containerStyle}) => (
  <View style={[styles.container, containerStyle]}>
    <View style={styles.line} />
    <Text style={styles.title}>{title}</Text>
  </View>
);
Section.propTypes = {
  title: PropTypes.string,
  containerStyle: ViewPropTypes.style,
};
export default Section;
