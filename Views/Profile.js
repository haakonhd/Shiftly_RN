import React, {Fragment, Component} from 'react';
import {SafeAreaView, ScrollView, View, Text, StatusBar} from 'react-native';
import {textStyle, tileStyle} from '../Styles';

export default class Profile extends React.Component {
  static navigationOptions = {
    title: 'Profile',
  };
  render() {
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <View>
              <Text> "Profile" </Text>
            </View>
          </ScrollView>
        </SafeAreaView>

        {/*<Navigator*/}
        {/*  initialRoute={{title: 'Awesome Scene', index: 0}}*/}
        {/*  renderScene={(route, navigator) => <Text>Hello {route.title}!</Text>}*/}
        {/*  style={{padding: 100}}*/}
        {/*/>*/}
      </Fragment>
    );
  }
}
