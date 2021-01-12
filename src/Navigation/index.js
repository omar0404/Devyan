import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreens from './HomeScreens';

const RootNavigation = () => (
  <NavigationContainer>
    <HomeScreens />
  </NavigationContainer>
);
export default RootNavigation;
