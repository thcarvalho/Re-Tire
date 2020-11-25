import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './src/routes/drawer-navigator';
import './src/config/statusbar';

function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}

export default App;
