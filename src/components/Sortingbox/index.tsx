import React, { FC } from 'react';
import { View } from 'react-native';

import Sorting from './Icons/Sorting';
import styles from './styles';

const Sortingbox: FC = () => {
  return (
    <View style={styles.wrapper}>
      <Sorting />
    </View>
  );
};

export default Sortingbox;
