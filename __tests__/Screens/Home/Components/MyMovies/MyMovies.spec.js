import React from 'react';
import MyMovies from 'Devyan/src/Screens/Home/Components/MyMovies';

import {create} from 'react-test-renderer';
import UserMovies from 'Devyan/src/Screens/Home/Components/UserMovies';

describe('MyMovies Componennt', () => {
  it('should render correctly', () => {
    let wrapper = create(<MyMovies />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it('should call onMoviePress CB Prop', () => {
    const onMoviePress = jest.fn();
    let wrapper = create(<MyMovies onMoviePress={onMoviePress} />);
    wrapper.root.find(UserMovies).props.onMoviePress();
    expect(onMoviePress).toBeCalled();
  });
});
