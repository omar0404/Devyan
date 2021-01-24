import React, {useState} from 'react';
import {FlatList} from 'react-native';
import {MyMovies, AllMovies} from './Components';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
const Home = () => {
  const navigation = useNavigation();
  const [likedMovies, setLikedMovies] = useState({});

  const handleUpdateLikedMovies = (movie) => {
    const movieId = movie.id;
    if (likedMovies[movieId]) {
      delete likedMovies[movieId];
      setLikedMovies((prevLikedMovies) => ({...prevLikedMovies}));
      return;
    }
    setLikedMovies((prevLikedMovies) => ({
      ...prevLikedMovies,
      [movieId]: movie,
    }));
  };
  const handleMoviePress = (movie) => {
    navigation.navigate('Movie', {movie});
  };
  return (
    <>
      <FlatList
        style={styles.container}
        ListHeaderComponent={
          <MyMovies
            onMoviePress={handleMoviePress}
            movies={likedMovies}
            onUnLikePress={handleUpdateLikedMovies}
          />
        }
        ListFooterComponent={
          <AllMovies
            onMoviePress={handleMoviePress}
            likedMovies={likedMovies}
            onLikePress={handleUpdateLikedMovies}
          />
        }
      />
    </>
  );
};
export default Home;
