import 'react-native';
import React from 'react';
import {Section} from 'MoviesApp/src/Components';

import renderer from 'react-test-renderer';

describe('Section Componennt', () => {
  it('renders correctly', () => {
    const SectionComponent = renderer.create(<Section />).toJSON();
    expect(SectionComponent).toMatchSnapshot();
  });
});
