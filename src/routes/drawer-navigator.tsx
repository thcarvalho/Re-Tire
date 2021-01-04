import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from '../components/CustomDrawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMA from 'react-native-vector-icons/MaterialIcons';
import colors from '../styles/colors';
import ListNavigator from './list-navigator';
import SuggestionsNavigator from './suggestions-navigator';
import StackNavigator from './stack-navigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator: React.FC = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <CustomDrawer
          itemStyle={{
            marginHorizontal: 0,
            paddingLeft: 20,
            height: 59,
            justifyContent: 'center',
          }}
          labelStyle={{ fontWeight: 'bold', marginLeft: -20, fontSize: 16 }}
          activeBackgroundColor={colors.third_grey}
          activeTintColor={colors.main_green}
          inactiveTintColor={colors.third_green}
          {...props}
        />
      )}>
      <Drawer.Screen
        name="Home"
        options={{
          drawerLabel: 'Início',
          drawerIcon: ({ color }) => (
            <Icon name="home" size={24} color={color} />
          ),
        }}
        component={StackNavigator}
      />
      <Drawer.Screen
        name="List"
        options={{
          drawerLabel: 'Lista',
          drawerIcon: ({ color }) => (
            <IconMA name="list-alt" size={24} color={color} />
          ),
        }}
        component={ListNavigator}
      />
      <Drawer.Screen
        name="Suggestions"
        options={{
          drawerLabel: 'Sugerir',
          drawerIcon: ({ color }) => (
            <Icon name="message-plus" size={24} color={color} />
          ),
        }}
        component={SuggestionsNavigator}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
