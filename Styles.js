import React, {Component} from 'react';
import {StyleSheet} from 'react-native';

export const textStyle = StyleSheet.create({
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
});

export const tileStyle = StyleSheet.create({
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
});
