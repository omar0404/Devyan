import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, AddMovie} from '../Screens';
import theme from 'MoviesApp/src/Theme';
const MainStack = createStackNavigator();
const HomeScreens = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerStyle: style.headerStyle,
        headerTintColor: theme.headerTintColor,
      }}>
      <MainStack.Screen name="Home" component={Home} />
      <MainStack.Screen
        name="AddMovie"
        options={{title: 'Add Movie'}}
        component={AddMovie}
      />
    </MainStack.Navigator>
  );
};
const style = StyleSheet.create({
  headerStyle: {
    elevation: 1,
    backgroundColor: theme.backgroundColor,
    shadowRadius: 0,
    shadowOffset: {
      height: 0.5,
    },
    shadowColor: theme.headerShadowColor,
  },
});
export default HomeScreens;
