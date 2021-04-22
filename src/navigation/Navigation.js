import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SalonDetails, SalonList} from '../screens';

const Stack = createStackNavigator();

export default () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SalonList" component={SalonList} />
      <Stack.Screen name="SalonDetails" component={SalonDetails} />
    </Stack.Navigator>
  </NavigationContainer>
);
