import {StyleSheet} from 'react-native';
import theme from 'Devyan/src/Theme';
const styles = StyleSheet.create({
  movieCardContainer: {
    width: '90%',
    height: 400,
    marginVertical: 20,
    alignSelf: 'center',
  },
  section: {
    marginTop: 50,
  },
  textInput: {
    ...theme.textInput.style,
    borderWidth: 0.3,
    height: 40,
    borderRadius: 4,
    marginTop: 10,
    padding: 10,
  },
});
export default styles;
