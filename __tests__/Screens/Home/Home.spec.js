import React from 'react';
import {shallow} from 'enzyme';
import {Home} from 'MoviesApp/src/Screens';

describe('Home Screen ', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toMatchSnapshot();
  });
});
