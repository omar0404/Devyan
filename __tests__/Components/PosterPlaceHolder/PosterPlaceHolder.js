import 'react-native';
import React from 'react';
import {PosterPlaceHolder} from 'Devyan/src/Components';

import renderer from 'react-test-renderer';

describe('PosterPlaceHolder Componennt', () => {
  it('renders correctly', () => {
    const PosterPlaceHolderComponent = renderer
      .create(<PosterPlaceHolder />)
      .toJSON();
    expect(PosterPlaceHolderComponent).toMatchSnapshot();
  });
});
