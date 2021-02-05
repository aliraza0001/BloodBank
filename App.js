import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import Navigation from './src/navigation';

const App = () => {
  const {isLogIn} = useSelector((state) => state.Auth);

  return (
    <NavigationContainer>
      {isLogIn ? <Navigation.Auth /> : <Navigation.Public />}
    </NavigationContainer>
  );
};

export default App;
