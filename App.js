import RootNavigation from 'Devyan/src/Navigation';
import React from 'react';
import {StatusBar} from 'react-native';
const App = () => {
  return (
    <>
      <StatusBar backgroundColor={'black'} />
      <RootNavigation />
    </>
  );
};
export default App;
