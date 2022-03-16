import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import {Page} from '../components';

const WORDS = ['WHATS', 'UP', 'BO9S', 'GANG'];

const Scroll = () => {
  const translateX = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler(e => {
    translateX.value = e.contentOffset.x;
  });
  return (
    <Animated.ScrollView
      onScroll={scrollHandler}
      scrollEventThrottle={16}
      horizontal
      style={styles.container}>
      {WORDS.map((title, i) => {
        return (
          <Page
            key={i.toString()}
            translateX={translateX}
            index={i}
            title={title}
          />
        );
      })}
    </Animated.ScrollView>
  );
};

export default Scroll;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
