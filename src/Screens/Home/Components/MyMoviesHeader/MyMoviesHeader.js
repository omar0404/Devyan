import React from 'react';
import {View} from 'react-native';
import {Section} from 'Devyan/src/Components';
import styles from './styles';
const MyMoviesHeader = () => (
  <View style={styles.container}>
    <Section title={'My Movies'} />
  </View>
);

export default MyMoviesHeader;
