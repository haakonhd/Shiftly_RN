import React, {Component} from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import Styles from '../Styles';

export default class DrawerNavigationLayout extends Component {
  constructor() {
    super();
    this.profileImage =
      'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png';
    this.items = [
      {
        navOptionThumb: 'home',
        navOptionName: 'Home',
        screenToNavigate: 'Home',
      },
      {
        navOptionThumb: 'user',
        navOptionName: 'Profile',
        screenToNavigate: 'Profile',
      },
      {
        navOptionThumb: 'info',
        navOptionName: 'About',
        screenToNavigate: 'About',
      },
    ];
  }
  render() {
    return (
      <View style={Styles.sideMenuContainer}>
        {/*Top Large Image */}
        <Image
          source={{uri: this.profileImage}}
          style={Styles.sideMenuProfileIcon}
        />
        {/*Divider between Top Image and Sidebar Option*/}
        <View style={Styles.navBarDivider} />
        {/*Setting up Navigation Options from option array using loop*/}
        <View style={{width: '100%'}}>
          {this.items.map((item, key) => (
            <TouchableOpacity
              onPress={() => {
                global.currentScreenIndex = key;
                this.props.navigation.navigate(item.screenToNavigate);
              }}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingTop: 15,
                paddingBottom: 15,
                backgroundColor:
                  global.currentScreenIndex === key ? '#e0dbdb' : '#ffffff',
              }}
              key={key}>
              <View style={{marginRight: 10, marginLeft: 20, width: 30}}>
                <Icon
                  name={item.navOptionThumb}
                  type="font-awesome"
                  size={25}
                  color={
                    global.currentScreenIndex === key ? '#23A2E0' : '#808080'
                  }
                />
              </View>
              <Text
                style={{
                  fontSize: 15,
                  color:
                    global.currentScreenIndex === key ? '#23A2E0' : 'black',
                }}>
                {item.navOptionName}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  }
}
