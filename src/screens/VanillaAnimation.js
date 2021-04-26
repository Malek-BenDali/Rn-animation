import React, {useEffect} from 'react';
import {
  Button,
  PanResponder,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  View,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  useAnimatedRef,
  scrollTo,
  useDerivedValue,
} from 'react-native-reanimated';
import {StyleGuide} from '../components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  ball: {
    backgroundColor: StyleGuide.palette.primary,
    height: 100,
    width: 100,
    borderRadius: 50,
  },
});

const VanillaAnimation = () => {
  const aref = useAnimatedRef();
  const scroll = useSharedValue(0);

  useDerivedValue(() => {
    scrollTo(aref, 0, scroll.value * 100, true);
  });

  const items = Array.from(Array(10).keys());

  return (
    <View>
      <Button
        title="scroll down"
        onPress={() => {
          scroll.value = scroll.value + 1;
          if (scroll.value >= 10) scroll.value = 0;
        }}
      />
      <View style={{width: 120, height: 200, backgroundColor: 'green'}}>
        <ScrollView ref={aref} style={{backgroundColor: 'orange', width: 120}}>
          {items.map((_, i) => (
            <View
              key={i}
              style={{
                backgroundColor: 'white',
                width: 100,
                height: 100,
                margin: 10,
              }}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default VanillaAnimation;
