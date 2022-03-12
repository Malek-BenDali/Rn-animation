// hbib
// zeb taz
// gahaf
// tahan
// the pistache
// react
// invaid
// deutshcland
// yoyo
// zebda
// machwa
// hrisa
// lemdaprem
// sorm rose
// bit rose
// vespa
// leger
// se3ida
// chinese food
// barceque
// mecanique
// dora
// zokomodoré
// fagas
// flash
// chichet taz
// fac safra
// iset
// bti
// aziza
// asfour
// sandwich hlou
// topnet

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {SalonDetails, SalonList, VanillaAnimation, Donut} from '../screens';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const Salon = () => (
  <Stack.Navigator
    screenOptions={{
      stackAnimation: 'slide_from_right',
      statusBarAnimation: 'slide',
    }}>
    <Stack.Screen name="SalonList" component={SalonList} />
    <Stack.Screen name="SalonDetails" component={SalonDetails} />
  </Stack.Navigator>
);

const MoveBall = () => (
  <Stack.Navigator
    screenOptions={{
      stackAnimation: 'slide_from_right',
      statusBarAnimation: 'slide',
    }}>
    <Stack.Screen name="Home" component={VanillaAnimation} />
  </Stack.Navigator>
);

export default () => (
  <NavigationContainer>
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Salon} />
      <Drawer.Screen name="Notifications" component={MoveBall} />
      <Drawer.Screen name="Donut" component={Donut} />
    </Drawer.Navigator>
  </NavigationContainer>
);
