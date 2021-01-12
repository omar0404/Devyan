import React from 'react';
import {FlatList} from 'react-native';
import {MyMovies, AllMovies} from './Components';
import styles from './styles';
const Home = () => {
  return (
    <FlatList
      style={styles.container}
      ListHeaderComponent={<MyMovies />}
      ListFooterComponent={<AllMovies />}
    />
  );
};
export default Home;
