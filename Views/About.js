import React, {Fragment, Component} from 'react';
import {SafeAreaView, ScrollView, View, Text, StatusBar} from 'react-native';
import Header from '../Components/Header';
// import Styles from '../Styles';

export default class About extends React.Component {
  static navigationOptions = {
    drawerLabel: 'About',
  };
  render() {
    return (
      <Fragment>
        <Header />
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <View>
              <Text> About </Text>
            </View>
          </ScrollView>
        </SafeAreaView>
      </Fragment>
    );
  }
}
