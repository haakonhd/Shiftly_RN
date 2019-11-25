import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';
import {withNavigation} from 'react-navigation';
import {DrawerActions} from 'react-navigation-drawer';
import Styles from '../Styles';

class DrawerTrigger extends React.Component {
  render() {
    return (
      <TouchableOpacity
        style={Styles.trigger}
        onPress={() => {
          this.props.navigation.dispatch(DrawerActions.openDrawer());
        }}>
        <Icon name="bars" size={30} type="font-awesome" color="#33ccff" />
      </TouchableOpacity>
    );
  }
}

export default withNavigation(DrawerTrigger);
