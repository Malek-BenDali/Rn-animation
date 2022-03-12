import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {StyleGuide} from '../components';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  withRepeat,
} from 'react-native-reanimated';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cube: {
    height: 100,
    width: 100,
    borderRadius: 25,
    backgroundColor: '#222',
  },
});

const VanillaAnimation = () => {
  const progress = useSharedValue(1);
  const scale = useSharedValue(0);
  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value,

      borderRadius: 50,
      transform: [{scale: scale.value}],
    };
  }, []);
  useEffect(() => {
    progress.value = withSpring(0.5);
    scale.value = withSpring(1);
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.cube, reanimatedStyle]} />
    </View>
  );
};

export default VanillaAnimation;
