import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import IDestination from '../models/Destination';
import DestinationsList from '../screens/DestinationsList';
import Details from '../screens/Details';
import DrawerNavigator from './drawer-navigator';

const Stack = createStackNavigator();

export type ListNavigatorParams = {
  Details: { destination: IDestination };
};

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
