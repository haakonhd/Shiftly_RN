import React from 'react';
import {View, Text} from 'react-native';
import {createDrawerNavigator} from 'react-navigation-drawer';
import Home from '../Views/Home';
import Profile from '../Views/Profile';

const DrawerNavigator = createDrawerNavigator({
  Home: Home,
  Profile: Profile,
});

export default DrawerNavigator;
