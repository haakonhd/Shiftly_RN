import React, {Fragment} from 'react';
import {SafeAreaView, ScrollView, View, StatusBar, Button} from 'react-native';
import Styles from '../Styles';
import Tile from '../Components/Tile';
import Header from '../Components/Header';

export default class Home extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
  };
  render() {
    return (
      <Fragment>
        <Header />
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <View>
              <View style={Styles.tileGrid}>
                <View style={Styles.tileRow}>
                  <Tile title="Button 1" navigationDestination="Profile" />
                  <Tile title="Button 2" navigationDestination="Home" />
                </View>
                <View style={Styles.tileRow}>
                  <Tile title="Button 3" navigationDestination="Profile" />
                  <Tile title="Button 4" navigationDestination="Home" />
                </View>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </Fragment>
    );
  }
}
