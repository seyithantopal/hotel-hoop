import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { detailsScreenProp } from '../../types/types';

import styles from './styles';

const DetailsScreen: FC<detailsScreenProp> = ({ route }) => {
  const { name } = route.params;
  return (
    <View style={styles.wrapper}>
      <Text>{name}</Text>
    </View>
  );
};

export default DetailsScreen;
