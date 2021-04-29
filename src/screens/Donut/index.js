import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Donut from './Donut';

const index = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white', justifyContent: 'center'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          flexWrap: 'wrap',
          alignItems: 'center',
        }}>
        <Donut />
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
