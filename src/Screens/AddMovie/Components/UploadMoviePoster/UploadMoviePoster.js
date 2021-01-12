import React, {useState} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';
import {TouchableOpacity, Text, Image} from 'react-native';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import {isFunction as _isFunction} from 'lodash';
import PropTypes from 'prop-types';
const UploadMoviePoster = ({onImageUpload}) => {
  const [imageUri, setImageUri] = useState(null);
  const handleUploadMoviePoster = () => {
    const options = {
      noData: false,
    };
    launchImageLibrary(options, (response) => {
      setImageUri(response.uri);
      _isFunction(onImageUpload) && onImageUpload(response.uri);
    });
  };
  return (
    <TouchableOpacity
      onPress={handleUploadMoviePoster}
      style={styles.container}>
      {imageUri ? (
        <Image
          resizeMode={'cover'}
          source={{
            uri: imageUri,
          }}
          style={styles.poster}
        />
      ) : (
        <>
          <Entypo name={'image'} color={'gray'} size={50} />
          <Text style={styles.text}> Upload Movie{'\n'}Poster</Text>
        </>
      )}
    </TouchableOpacity>
  );
};
UploadMoviePoster.propTypes = {
  onImageUpload: PropTypes.func,
};
export default UploadMoviePoster;
