import {StyleSheet} from 'react-native';
import theme from 'Devyan/src/Theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 'auto',
  },
  line: {
    width: 5,
    height: 15,
    backgroundColor: theme.sectionLine,
  },
  title: {
    color: theme.text.primary,
    marginLeft: 8,
    fontSize: 18,
  },
});
export default styles;
