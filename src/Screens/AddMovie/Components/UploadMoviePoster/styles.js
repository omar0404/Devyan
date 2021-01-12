import {StyleSheet} from 'react-native';
import theme from 'MoviesApp/src/Theme';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexBasis: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginRight: 20,
    borderStyle: 'dotted',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: theme.text.secondary,
    textAlign: 'center',
    marginTop: 12,
  },
  poster: {
    width: '100%',
    flex: 1,
  },
});
export default styles;
