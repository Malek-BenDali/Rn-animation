import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {SalonDetails, SalonList} from '../screens';

const Stack = createNativeStackNavigator();

export default () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        stackAnimation: 'slide_from_right',
        statusBarAnimation: 'slide',
      }}>
      <Stack.Screen name="SalonList" component={SalonList} />
      <Stack.Screen name="SalonDetails" component={SalonDetails} />
    </Stack.Navigator>
  </NavigationContainer>
);
