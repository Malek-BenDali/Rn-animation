import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import salon from '../components/salon';

export const {height, width} = Dimensions.get('window');

export const ITEM_HEIGHT = height * 0.18;
export const SPACING = 10;

const SalonList = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar backgroundColor="transparent" barStyle="dark-content" />
      <FlatList
        data={salon}
        keyExtractor={item => item.key}
        contentContainerStyle={{padding: SPACING}}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              style={{marginBottom: SPACING, height: ITEM_HEIGHT}}
              onPress={() => {
                navigation.navigate('SalonDetails', {item});
              }}>
              <View style={{flex: 1, padding: SPACING}}>
                <View
                  style={[
                    StyleSheet.absoluteFillObject,
                    {backgroundColor: item.color, borderRadius: 16},
                  ]}
                />
                <Text style={styles.name}>{item.name} </Text>
                <Text style={styles.jobTitle}>{item.jobTitle} </Text>
                <Image source={{uri: item.image}} style={styles.image} />
              </View>
            </TouchableOpacity>
          );
        }}
      />
      <View style={styles.bg} />
    </SafeAreaView>
  );
};

export default SalonList;

const styles = StyleSheet.create({
  name: {
    fontWeight: '700',
    fontSize: 18,
  },
  jobTitle: {
    fontSize: 11,
    opacity: 0.7,
  },
  image: {
    width: ITEM_HEIGHT * 0.8,
    height: ITEM_HEIGHT * 0.8,
    resizeMode: 'contain',
    position: 'absolute',
    bottom: 0,
    right: SPACING,
  },
  bg: {
    position: 'absolute',
    width,
    height,
    backgroundColor: 'red',
    transform: [{translateY: height}],
    borderRadius: 32,
    paddingTop: 32 + SPACING,
    padding: SPACING,
  },
});
