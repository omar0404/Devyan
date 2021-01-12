import React from 'react';
import {create} from 'react-test-renderer';
import {UserMovies} from 'MoviesApp/src/Screens/Home/Components';
import {shallow} from 'enzyme';

describe('UserMovies Component with no movies', () => {
  it('should render no movies added text ', () => {
    const wrapper = shallow(<UserMovies />);
    expect(wrapper.find({testID: 'noMoviesAdded'}).props().children).toBe(
      'No Movies Added',
    );
  });
});

describe('UserMovies Component with movies ', () => {
  it('should render user movies  ', () => {
    const movies = [{name: 'Batman'}, {name: 'SuperMan'}];
    const wrapper = create(<UserMovies movies={movies} />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
