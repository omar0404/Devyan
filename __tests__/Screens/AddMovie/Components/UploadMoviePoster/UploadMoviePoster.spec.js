import React from 'react';
import UploadMoviePoster from 'MoviesApp/src/Screens/AddMovie/Components/UploadMoviePoster';
import {shallow} from 'enzyme';
import {TouchableOpacity} from 'react-native';

describe('UploadMoviePoster Component', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<UploadMoviePoster onImageUpload={jest.fn()} />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find(TouchableOpacity).prop('onPress')();
  });
});
