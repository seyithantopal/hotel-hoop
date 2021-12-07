import React, { FC } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const DetailsScreen: FC = () => {
  return (
    <View style={styles.wrapper}>
      <Text>Detail Screen</Text>
    </View>
  );
};

export default DetailsScreen;
