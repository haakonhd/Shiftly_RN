import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Styles from '../Styles';
import {withNavigation} from 'react-navigation';

class Tile extends React.Component {
  render() {
    const destinationScreen = this.props.navigationDestination;
    return (
      <TouchableOpacity
        title={'btm'}
        style={Styles.tile}
        onPress={() => {
          this.props.navigation.navigate(destinationScreen);
        }}>
        <View style={Styles.tile}>
          <Text style={Styles.tileHeader}>{this.props.title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default withNavigation(Tile);
