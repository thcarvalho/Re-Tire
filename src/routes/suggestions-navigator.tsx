import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import SuggestionsContact from '../screens/Suggestions/SuggestionContact';
import SuggestionsImage from '../screens/Suggestions/SuggestionImage';
import SuggestionsMap from '../screens/Suggestions/SuggestionMap';
import SuggestionsName from '../screens/Suggestions/SuggestionName';
import SuggestionReview from '../screens/Suggestions/SuggestionReview';
import DrawerNavigator from './drawer-navigator';

const Stack = createStackNavigator();

const SuggestionsNavigator: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SuggestionMap" component={SuggestionsMap} />
      <Stack.Screen name="SuggestionName" component={SuggestionsName} />
      <Stack.Screen name="SuggestionContact" component={SuggestionsContact} />
      <Stack.Screen name="SuggestionImage" component={SuggestionsImage} />
      <Stack.Screen name="SuggestionReview" component={SuggestionReview} />
      <Stack.Screen name="Map" component={DrawerNavigator} />
    </Stack.Navigator>
  );
};

export default SuggestionsNavigator;
