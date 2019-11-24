import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {textStyle, tileStyle} from '../Styles';
import {withNavigation} from 'react-navigation';

class Tile extends React.Component {
  render() {
    const destinationScreen = this.props.navigationDestination;
    return (
      <TouchableOpacity
        title={'btm'}
        style={tileStyle.tile}
        onPress={() => {
          this.props.navigation.navigate(destinationScreen);
        }}>
        <View style={tileStyle.tile}>
          <Text style={textStyle.tileHeader}>{this.props.title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default withNavigation(Tile);
