import React from 'react';
import {MyMovies} from 'MoviesApp/src/Screens/Home/Components/MyMovies/MyMovies';
import {shallow} from 'enzyme';

import {create} from 'react-test-renderer';

describe('MyMovies Componennt', () => {
  it('should render correctly', () => {
    let wrapper = create(<MyMovies />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
  it('should add added movie in user movies', () => {
    const movie = {name: 'Batman'};
    let wrapper = shallow(<MyMovies navigation={jest.fn()} />);
    wrapper.setProps({
      navigationParams: {addedMovie: movie},
    });
    const moviesState = wrapper.state().movies;
    expect(moviesState).toContainEqual(movie);
  });
  it('should navigate to add movie screen', () => {
    const navigate = jest.fn();
    const navigation = {navigate};
    let wrapper = shallow(<MyMovies navigation={navigation} />);
    const handleAddNewMoviePress = wrapper.instance().handleAddNewMoviePress;
    handleAddNewMoviePress();
    expect(navigate).toBeCalled();
  });
});
