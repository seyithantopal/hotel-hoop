import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { homeScreenProp } from '../../types/types';

import styles from './styles';

const HomeScreen: FC = () => {
  const navigation = useNavigation<homeScreenProp>();
  return (
    <View style={styles.wrapper}>
      <Text onPress={() => navigation.push('Details')}>Home Screen</Text>
    </View>
  );
};

export default HomeScreen;
