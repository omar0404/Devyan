import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
const withNaviagtion = (WrappedComponent) => {
  const WithNaviagtion = (props) => {
    const navigation = useNavigation();
    const route = useRoute();
    const navigationParams = route.params;
    return (
      <WrappedComponent
        {...props}
        navigation={navigation}
        navigationParams={navigationParams}
      />
    );
  };

  return WithNaviagtion;
};
export default withNaviagtion;
