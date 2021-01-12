import React from 'react';
import {create} from 'react-test-renderer';
import {AddMovie} from 'MoviesApp/src/Screens';
import {
  handleInputChange,
  handleMoviePosterUpload,
  handleAddMoviePress,
} from 'MoviesApp/src/Screens/AddMovie/AddMovie';

describe('AddMovie Screen', () => {
  it('should render correctly', () => {
    const wrapper = create(<AddMovie />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
  it('should update form values state when input changes', () => {
    const formValues = {};
    const setFormValues = jest.fn((cb) => {
      cb(formValues);
    });
    const fieldName = 'title';
    const fieldValue = 'Batman';
    handleInputChange(fieldName, setFormValues)(fieldValue);
    expect(setFormValues).toBeCalled();
  });
  it('should update form values state when poster movie uploaded', () => {
    const formValues = {};
    const imageUri = 'fakeUri';
    const setFormValues = jest.fn((cb) => {
      cb(formValues);
    });
    handleMoviePosterUpload(setFormValues)(imageUri);
    expect(setFormValues).toBeCalled();
  });
  it('should navigate to home screen with added movie', () => {
    const formValues = {};
    const expectedParams = {addedMovie: formValues};
    const navigation = {navigate: jest.fn()};
    handleAddMoviePress(navigation, formValues)();
    expect(navigation.navigate).toHaveBeenCalledWith('Home', expectedParams);
  });
});
