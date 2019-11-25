import React, {Component} from 'react';
import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  tileTextGeneral: {
    color: 'white',
  },
  tileHeader: {
    color: 'white',
    fontSize: 20,
  },

  tileBody: {
    color: 'white',
    fontSize: 16,
  },

  icon: {
    width: 24,
    height: 24,
  },

  tileGrid: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'nowrap',
    marginTop: 10,
  },

  tileRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },

  tile: {
    backgroundColor: 'skyblue',
    aspectRatio: 1,
    flex: 1,
    margin: 10,
  },

  header: {
    paddingTop: 20,
    backgroundColor: 'whitesmoke',
  },

  trigger: {
    marginLeft: 10,
    borderRadius: 30,
    width: 60,
    height: 40,
  },
});

export default Styles;
