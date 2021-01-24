import React from 'react';
import {MyMoviesHeader} from 'Devyan/src/Screens/Home/Components';

import {create} from 'react-test-renderer';

describe('MyMoviesHeader Component', () => {
  it('should render correctly', () => {
    let wrapper = create(<MyMoviesHeader />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
