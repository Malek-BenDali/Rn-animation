import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import {PinchGestureHandler} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const {width, height} = Dimensions.get('window');

const Zoom = () => {
  const uri =
    'https://images.unsplash.com/photo-1621569642780-4864752e847e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80';

  const focalY = useSharedValue(0);
  const focalX = useSharedValue(0);
  const scale = useSharedValue(1);
  const pinchHandler = useAnimatedGestureHandler({
    onActive: e => {
      scale.value = e.scale;
      focalY.value = e.focalY;
      focalX.value = e.focalX;
    },
    onEnd: () => {
      scale.value = withTiming(1);
    },
  });
  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: focalX.value},
        {translateY: focalY.value},
        {translateX: -width / 2},
        {translateY: -height / 2},
        {scale: scale.value},
        {translateX: -focalX.value},
        {translateY: -focalY.value},
        {translateX: +width / 2},
        {translateY: +height / 2},
      ],
    };
  });
  const rFocalPoint = useAnimatedStyle(() => {
    return {
      transform: [{translateX: focalX.value}, {translateY: focalY.value}],
    };
  });

  return (
    <PinchGestureHandler onGestureEvent={pinchHandler}>
      <Animated.View style={styles.image}>
        <Animated.Image style={[styles.image, rStyle]} source={{uri}} />
        <Animated.View style={[styles.focalPoint, rFocalPoint]} />
      </Animated.View>
    </PinchGestureHandler>
  );
};

export default Zoom;

const styles = StyleSheet.create({
  image: {flex: 1},
  focalPoint: {
    width: 10,
    height: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
    ...StyleSheet.absoluteFill,
  },
});
