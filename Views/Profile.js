import React, {Fragment, Component} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';
import * as styles from '../Styles';
import ScreenName from '../Components/ScreenName';
import Header from '../Components/Header.js';

export default class Profile extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Profile',
    drawerIcon: ({tintColor}) => (
      <Image
        // source={require('./chats-icon.png')}
        style={[styles.iconStyle.icon, {tintColor: tintColor}]}
      />
    ),
  };
  render() {
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <View>
              <Text> "Profileee" </Text>
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
