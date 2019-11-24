import React, {Fragment} from 'react';
import {SafeAreaView, ScrollView, View, StatusBar, Button} from 'react-native';
import {tileStyle} from '../Styles';
import Tile from '../Components/Tile';

export default class Home extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <View>
              <View style={tileStyle.tileGrid}>
                <View style={tileStyle.tileRow}>
                  <Tile title="Button 1" navigationDestination="Profile" />
                  <Tile title="Button 2" navigationDestination="Home" />
                </View>
                <View style={tileStyle.tileRow}>
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
