import React from 'react';
import {
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  ScrollView,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {detailsIcon} from '../components/salon';
import {height, ITEM_HEIGHT, SPACING, width} from './SalonList';
import * as Animatable from 'react-native-animatable';

const TOP_HEADER_HEIGHT = height * 0.3;
const DURATION = 400;
const SalonDetails = ({navigation, route}) => {
  const {item} = route.params;
  return (
    <View style={{flex: 1, backgroundColor: item.color}}>
      <StatusBar backgroundColor={item.color} />
      <TouchableOpacity
        style={{
          padding: 12,
          position: 'absolute',
          top: SPACING * 2,
          left: SPACING,
          zIndex: 2,
        }}
        onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={28} />
      </TouchableOpacity>
      <View
        style={[
          StyleSheet.absoluteFillObject,
          {
            height: TOP_HEADER_HEIGHT,
          },
        ]}
      />
      <Text style={styles.name}>{item.name} </Text>
      <Image source={{uri: item.image}} style={styles.image} />

      <View style={styles.bg}>
        <ScrollView>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginVertical: SPACING,
              marginBottom: SPACING * 2 + 32,
            }}>
            {detailsIcon.map((detail, index) => {
              return (
                <Animatable.View
                  key={`${detail.icon}-${index}`}
                  animation="bounceIn"
                  delay={DURATION + index * 100}
                  style={{
                    backgroundColor: detail.color,
                    height: 64,
                    width: 64,
                    borderRadius: 32,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <AntDesign name={detail.icon} size={24} color="white" />
                </Animatable.View>
              );
            })}
          </View>
          <View>
            {item.categories.map((category, index) => {
              return (
                <Animatable.View
                  key={category.key}
                  animation="fadeInUp"
                  delay={DURATION * 2 + index * 200}>
                  <Text style={styles.title}>{category.title}</Text>
                  {category.subcats.map((subcat, index) => {
                    return (
                      <View
                        key={`${subcat}-${index}`}
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          marginBottom: SPACING / 2,
                          marginLeft: SPACING,
                        }}>
                        <View
                          style={{
                            height: 8,
                            width: 8,
                            borderRadius: 4,
                            backgroundColor: 'gold',
                            marginRight: SPACING,
                          }}
                        />
                        <Text style={styles.subTitlee}>{subcat}</Text>
                      </View>
                    );
                  })}
                </Animatable.View>
              );
            })}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default SalonDetails;

const styles = StyleSheet.create({
  bg: {
    position: 'absolute',

    width,
    height: height - TOP_HEADER_HEIGHT,
    backgroundColor: 'white',
    transform: [{translateY: TOP_HEADER_HEIGHT}],
    borderRadius: 32,
    paddingTop: 32 + SPACING,
    padding: SPACING,
  },
  name: {
    fontWeight: '700',
    fontSize: 20,
    position: 'absolute',
    top: TOP_HEADER_HEIGHT - SPACING * 4,
    left: SPACING,
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
    top: TOP_HEADER_HEIGHT - ITEM_HEIGHT * 0.8,
    right: SPACING,
  },
  title: {
    fontWeight: '700',
    fontSize: 18,
    marginBottom: SPACING,
  },
  subTitlee: {
    fontSize: 15,
    opacity: 0.8,
  },
});
