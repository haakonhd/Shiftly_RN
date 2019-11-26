import React from 'react';
import AppNavigator from './Navigation/AppNavigator';

global.currentScreenIndex = 0;

export default function App() {
  return <AppNavigator />;
}
