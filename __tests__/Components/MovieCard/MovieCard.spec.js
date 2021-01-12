import 'react-native';
import React from 'react';
import {MovieCard} from 'MoviesApp/src/Components';

import renderer from 'react-test-renderer';
import {POSTER_BASE_URL} from 'MoviesApp/src/Config';

describe('Movie Card Componennt', () => {
  it('renders correctly', () => {
    const MovieCardComponent = renderer.create(<MovieCard />).toJSON();
    expect(MovieCardComponent).toMatchSnapshot();
  });

  it('renders movie poster', () => {
    const props = {
      movie: {posterUri: POSTER_BASE_URL},
    };
    const MovieCardComponent = renderer
      .create(<MovieCard {...props} />)
      .toJSON();
    expect(MovieCardComponent).toMatchSnapshot();
  });
});
