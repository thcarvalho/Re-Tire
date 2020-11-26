import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import DestinationsList from '../screens/DestinationsList';
import Details from '../screens/Details';
import DrawerNavigator from './drawer-navigator';

const Stack = createStackNavigator();

const ListNavigator: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="List" component={DestinationsList} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Map" component={DrawerNavigator} />
    </Stack.Navigator>
  );
};

export default ListNavigator;
