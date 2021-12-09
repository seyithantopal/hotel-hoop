import React, { FC } from 'react';
import { View } from 'react-native';

import Sorting from '../../assets/icons/Sorting';
import styles from './styles';

const Sortingbox: FC = () => {
  return (
    <View style={styles.wrapper}>
      <Sorting />
    </View>
  );
};

export default Sortingbox;
