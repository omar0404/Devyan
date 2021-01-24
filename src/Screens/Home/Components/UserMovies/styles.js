import {StyleSheet} from 'react-native';
import theme from 'Devyan/src/Theme';
const styles = StyleSheet.create({
  noMoviesContainer: {
    padding: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },

  noMoviesText: {
    color: theme.text.secondary,
  },
  moviesContainer: {
    marginTop: 10,
  },
});
export default styles;
