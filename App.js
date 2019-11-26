import React from 'react';
import { createStackNavigator, createAppContainer} from 'react-navigation';

import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import KatalogMobilScreen from './screens/KatalogMobilScreen';
import KatalogMotorScreen from './screens/KatalogMotorScreen';

const navigator = createStackNavigator({
  Home: HomeScreen,
  KatalogMobil: KatalogMobilScreen,
  KatalogMotor: KatalogMotorScreen
},{
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    headerTitle: 'Final Project',
    headerStyle: {
      backgroundColor: '#24252a'
    },
    headerTintColor: 'white',
    headerTitleStyle: {
      fontWeight: 'bold',
      padding: 20
    }
  }
});

export default createAppContainer(navigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
