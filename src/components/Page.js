import {StyleSheet, Dimensions, Text, View} from 'react-native';
import React from 'react';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

const {width, height} = Dimensions.get('window');
const SIZE = width * 0.7;

const Page = ({translateX, title, index}) => {
  const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
  const rStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      translateX.value,
      inputRange,
      [0, 1, 0],
      Extrapolate.CLAMP,
    );
    const borderRadius = interpolate(translateX.value, inputRange, [
      0,
      SIZE / 2,
      0,
    ]);
    return {
      borderRadius,
      transform: [{scale}],
    };
  });

  const rTextStyle = useAnimatedStyle(() => {
    const translateY = interpolate(translateX.value, inputRange, [
      200,
      0,
      -200,
    ]);
    const opacity = interpolate(translateX.value, inputRange, [-2, 1, -2]);
    return {
      opacity,
      transform: [{translateY}],
    };
  });
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: `rgba(0,0,256, 0.${index + 2})`},
      ]}>
      <Animated.View style={[styles.square, rStyle]} />
      <Animated.View style={[{position: 'absolute'}, rTextStyle]}>
        <Text style={styles.title}>{title}</Text>
      </Animated.View>
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    height,
    width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  square: {
    height: SIZE,
    width: SIZE,

    backgroundColor: 'rgba(0,0,265,0.4)',
  },
  title: {
    fontSize: 70,
    color: 'white',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});
