import React from 'react';

import {
  renderFooter,
  renderMovie,
  handleEndReached,
  handleKeyExtractor,
} from 'Devyan/src/Screens/Home/Components/AllMovies/AllMovies';
import {shallow} from 'enzyme';
import {AllMovies} from 'Devyan/src/Screens/Home/Components';
import {create, act} from 'react-test-renderer';
import {getMovies} from 'Devyan/src/Api/movies';
describe('AllMovies Footer render function', () => {
  it('should render loading indicator while fetching new movies', () => {
    expect(renderFooter(true)).toBeDefined();
  });
  it('should render nul when there is no fetching', () => {
    expect(renderFooter(false)).toBeNull();
  });
});

describe('Movies list reached to the end', () => {
  it('should increment page number', () => {
    const prevPage = 1;
    const setPage = jest.fn((cb) => {
      cb(prevPage);
    });
    handleEndReached(setPage)();
    expect(setPage).toBeCalled();
  });
});
describe('rendering movie', () => {
  it('should render movie card correctly', () => {
    const props = {
      item: {},
    };
    const onLikePress = jest.fn();
    const onMoviePress = jest.fn();
    expect(
      shallow(renderMovie(onLikePress, {}, onMoviePress)(props)),
    ).toMatchSnapshot();
  });
});

describe('Movies List Key Extractor', () => {
  it('should return unique key for movie  component', () => {
    const movies = [{id: 345}, {id: 34512}, {id: 29929}];
    const expectedMoviesUniqueKeys = [345, 34512, 29929];
    const result = movies.map((movie) => handleKeyExtractor(movie));
    expect(expectedMoviesUniqueKeys).toEqual(result);
  });
});

describe('AllMovies Component', () => {
  it('should render AllMovies Component correctly', async () => {
    const wrapper = create(<AllMovies />);
    await act(() => getMovies());
    expect(wrapper).toMatchSnapshot();
  });
});
