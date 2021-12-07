import React, { FC } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const Home: FC = () => {
  return (
    <View style={styles.wrapper}>
      <Text>Home Screen</Text>
    </View>
  );
};

export default Home;
