import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import styles from './styles';
import theme from '../../Theme';
import UploadMoviePoster from './Components/UploadMoviePoster';
import PropTypes from 'prop-types';
const handleInputChange = (name, setFormValues) => (value) => {
  setFormValues((prevState) => ({...prevState, [name]: value}));
};
const handleMoviePosterUpload = (setFormValues) => (imageUri) => {
  setFormValues((prevState) => ({...prevState, posterUri: imageUri}));
};
const handleAddMoviePress = (navigation, formValues) => () => {
  navigation.navigate('Home', {addedMovie: formValues});
};
const AddMovie = ({navigation}) => {
  const [formValues, setFormValues] = useState({});
  const isButtonDisabled = !formValues.title;
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <UploadMoviePoster
          onImageUpload={handleMoviePosterUpload(setFormValues)}
        />
        <View style={styles.fieldsContainer}>
          <TextInput
            placeholderTextColor={theme.textInputPlaceHolder}
            placeholder={'Title *'}
            style={styles.texInputContainer}
            onChangeText={handleInputChange('title', setFormValues)}
          />
          <TextInput
            placeholderTextColor={theme.textInputPlaceHolder}
            placeholder={'Overview'}
            style={styles.texInputContainer}
            onChangeText={handleInputChange('overview', setFormValues)}
          />
          <TextInput
            placeholderTextColor={theme.textInputPlaceHolder}
            placeholder={'Date'}
            style={styles.texInputContainer}
            onChangeText={handleInputChange('date', setFormValues)}
          />
        </View>
      </View>
      <TouchableOpacity
        style={styles.button(isButtonDisabled)}
        disabled={isButtonDisabled}
        onPress={handleAddMoviePress(navigation, formValues)}>
        <Text style={styles.buttonText}>Add Movie</Text>
      </TouchableOpacity>
    </View>
  );
};
AddMovie.propTypes = {
  navigation: PropTypes.object,
};
export {handleInputChange, handleMoviePosterUpload, handleAddMoviePress};
export default AddMovie;
