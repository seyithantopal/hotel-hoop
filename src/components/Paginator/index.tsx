import React, { FC } from 'react';
import { View, Animated, Dimensions } from 'react-native';
import {
  COLOR_PAGINATOR_BACKGROUND_COLOR_ACTIVE,
  COLOR_PAGINATOR_BACKGROUND_COLOR_PASSIVE,
} from '../../utils/constants/color';

import styles from './styles';

const Paginator: FC<{
  data: string[];
  scrollX: Animated.Value;
}> = ({ data, scrollX }) => {
  const { width } = Dimensions.get('screen');
  return (
    <View style={styles.wrapper}>
      {data?.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 35, 10],
          extrapolate: 'clamp',
        });
        const dotBackgroundColor = scrollX.interpolate({
          inputRange,
          outputRange: [
            COLOR_PAGINATOR_BACKGROUND_COLOR_PASSIVE,
            COLOR_PAGINATOR_BACKGROUND_COLOR_ACTIVE,
            COLOR_PAGINATOR_BACKGROUND_COLOR_PASSIVE,
          ],
          extrapolate: 'clamp',
        });
        return (
          <Animated.View
            style={[
              styles.dot,
              { width: dotWidth, backgroundColor: dotBackgroundColor },
            ]}
            key={i}
          />
        );
      })}
    </View>
  );
};

export default Paginator;
