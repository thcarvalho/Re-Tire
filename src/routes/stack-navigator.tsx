import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Map from '../screens/Map';
import Details from '../screens/Details';

const Stack = createStackNavigator();

const StackNavigator: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Map" component={Map} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
