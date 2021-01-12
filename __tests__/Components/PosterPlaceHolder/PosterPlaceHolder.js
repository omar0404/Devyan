import 'react-native';
import React from 'react';
import {PosterPlaceHolder} from 'MoviesApp/src/Components';

import renderer from 'react-test-renderer';

describe('PosterPlaceHolder Componennt', () => {
  it('renders correctly', () => {
    const PosterPlaceHolderComponent = renderer
      .create(<PosterPlaceHolder />)
      .toJSON();
    expect(PosterPlaceHolderComponent).toMatchSnapshot();
  });
});
