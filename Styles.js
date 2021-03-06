import React, {Component} from 'react';
import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
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
    alignSelf: 'center',
    aspectRatio: 1,
    alignItems: 'center',
  },

  tileRow: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    height: 30,
    flexGrow: 1,
    maxWidth: 400,
    margin: 3,
  },

  tile: {
    aspectRatio: 1,
    padding: 2,
    flex: 1,
    margin: 5,
    backgroundColor: '#4295c2',
    maxWidth: 200,
  },

  tileHeader: {
    color: '#f6f6db',
    fontSize: 20,
  },

  header: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: '#2a5f7c',
    flexDirection: 'row',
    alignItems: 'center',
  },

  headerText: {
    fontSize: 35,
    fontFamily: 'pacifico',
    color: '#eaeac0',
  },

  trigger: {
    marginHorizontal: 10,
    width: 60,
  },

  sideMenuContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 20,
  },

  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 150,
    height: 150,
    marginTop: 20,
    borderRadius: 150 / 2,
  },

  navBarDivider: {
    width: '100%',
    height: 1,
    backgroundColor: '#e2e2e2',
    marginTop: 15,
  },
});

export default Styles;
