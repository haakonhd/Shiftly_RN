import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import DrawerTrigger from './DrawerTrigger';
import Styles from '../Styles';

class Header extends React.Component {
  render() {
    return (
      <View style={Styles.header}>
        <DrawerTrigger />
        <Text style={Styles.headerText}>Shiftly</Text>
      </View>
    );
  }
}

export default Header;
