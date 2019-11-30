import React, {Fragment} from 'react';
import {View, StatusBar, Dimensions} from 'react-native';
import Styles from '../Styles';
import Tile from '../Components/Tile';
import Header from '../Components/Header';

export default class Home extends React.Component {
  render() {
    return (
      <Fragment>
        <Header />
        <StatusBar barStyle="dark-content" />
        <View style={Styles.tileGrid}>
          <View style={[Styles.tileRow, {alignItems: 'flex-end'}]}>
            <Tile title="Schedule" navigationDestination="Profile" />
            <Tile title="Messages" navigationDestination="Home" />
          </View>
          <View style={[Styles.tileRow, {alignItems: 'flex-start'}]}>
            <Tile title="Events" navigationDestination="Profile" />
            <Tile title="Team messages" navigationDestination="Home" />
          </View>
        </View>
      </Fragment>
    );
  }
}

// flex: 0,
// marginVertical: 1,
// marginHorizontal: 5,
// alignSelf: 'stretch',
