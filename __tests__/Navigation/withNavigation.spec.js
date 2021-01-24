import React from 'react';
import {View} from 'react-native';
import {shallow} from 'enzyme';
describe('', () => {
  it('', () => {
    const withNavigation = jest.requireActual(
      'Devyan/src/Navigation/withNavigation',
    ).default;
    const DummyComponent = (props) => <View {...props} />;
    const Component = withNavigation(DummyComponent);

    const shallowComponent = shallow(<Component />);
    expect(shallowComponent).toMatchSnapshot();
  });
});
