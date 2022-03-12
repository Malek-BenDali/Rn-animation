import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {SalonDetails, SalonList, FadeIn, Donut, Pangesture} from '../screens';

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

export default () => (
  <NavigationContainer>
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Salon} />
      <Drawer.Screen name="Fade In" component={FadeIn} />
      <Drawer.Screen name="Donut" component={Donut} />
      <Drawer.Screen name="Pangesture" component={Pangesture} />
    </Drawer.Navigator>
  </NavigationContainer>
);
