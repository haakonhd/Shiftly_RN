import React, {Fragment, Component} from 'react';
import {SafeAreaView, ScrollView, View, Text, StatusBar} from 'react-native';
// import Styles from '../Styles';

export default class Profile extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Profile',
  };
  render() {
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <View>
              <Text> Profile </Text>
            </View>
          </ScrollView>
        </SafeAreaView>
      </Fragment>
    );
  }
}
