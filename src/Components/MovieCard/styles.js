import {StyleSheet} from 'react-native';
import theme from 'Devyan/src/Theme';

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 200,
    marginRight: 20,
  },
  detailsContainer: {
    marginTop: 12,
    flex: 1,
  },
  titleDateContainer: {
    flexDirection: 'row',
    borderColor: 'white',
    justifyContent: 'space-between',
  },
  poster: {
    width: null,
    height: null,
    flex: 2,
  },
  title: {
    color: theme.text.primary,
    flex: 1,
  },
  date: {
    color: theme.text.teritary,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'right',
  },
  overview: {
    color: theme.text.secondary,
    marginTop: 12,
  },
});
export default styles;
