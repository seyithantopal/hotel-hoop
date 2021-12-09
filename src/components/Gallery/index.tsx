import React, { FC, useRef } from 'react';
import { View, Image, FlatList, Dimensions, Animated } from 'react-native';
import Paginator from '../Paginator';

import styles from './styles';

const Gallery: FC<{ gallery: string[] }> = ({ gallery }) => {
  const { width, height } = Dimensions.get('screen');
  const ITEM_WIDTH = width * 0.87;
  const ITEM_HEIGHT = width * 1.47;
  const scrollX = useRef(new Animated.Value(0)).current;
  return (
    <View style={styles.wrapper}>
      <FlatList
        data={gallery}
        horizontal
        pagingEnabled
        style={{ width }}
        showsHorizontalScrollIndicator={false}
        bounces={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false },
        )}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => {
          return (
            <View style={[styles.imageWrapper, { width }]}>
              <Image
                style={[styles.image, { width: ITEM_WIDTH }]}
                source={{ uri: item }}
              />
            </View>
          );
        }}
      />
      <Paginator data={gallery} scrollX={scrollX} />
    </View>
  );
};

export default Gallery;
