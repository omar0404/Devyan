import React from 'react';
import {MyMoviesHeader} from 'MoviesApp/src/Screens/Home/Components';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {create} from 'react-test-renderer';

describe('MyMoviesHeader Component', () => {
  it('should render correctly', () => {
    let wrapper = create(<MyMoviesHeader />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
  it('should call onAddNewMoviePress CB when add icon clicked', () => {
    const onAddNewMoviePress = jest.fn();
    let wrapper = create(
      <MyMoviesHeader onAddNewMoviePress={onAddNewMoviePress} />,
    );
    wrapper.root.findByType(Ionicons).props.onPress();
    expect(onAddNewMoviePress).toBeCalled();
  });
});
