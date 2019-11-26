import React from 'react';
import {View, Text} from 'react-native';
import {createDrawerNavigator} from 'react-navigation-drawer';
import Home from '../Views/Home';
import Profile from '../Views/Profile';
import About from '../Views/About';
import DrawerNavigationLayout from '../Components/DraweNavigatorLayout';

const DrawerNavigator = createDrawerNavigator(
  {
    Home: Home,
    Profile: Profile,
    About: About,
  },
  {
    contentComponent: DrawerNavigationLayout,
  },
);

export default DrawerNavigator;
