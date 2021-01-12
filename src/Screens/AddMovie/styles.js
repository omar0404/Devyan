import {StyleSheet} from 'react-native';
import theme from 'MoviesApp/src/Theme';
const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.backgroundColor,
    flex: 1,
    padding: 15,
  },
  formContainer: {
    flexDirection: 'row',
  },
  fieldsContainer: {flex: 3},
  texInputContainer: {
    height: 45,
    borderRadius: 5,
    padding: 10,
    color: theme.text.secondary,
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: theme.textInputBorder,
    marginTop: 40,
  },
  button: (isDisabled) => ({
    height: 50,
    borderRadius: 5,
    marginTop: 50,
    backgroundColor: isDisabled ? theme.button.disabled : theme.button.default,
    alignItems: 'center',
    justifyContent: 'center',
  }),
  buttonText: {
    fontSize: 15,
    color: theme.text.primary,
    fontWeight: 'bold',
  },
});
export default styles;
