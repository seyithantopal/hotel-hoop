import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { homeScreenProp } from '../../types/types';

// Components
import Title from '../../components/Title';
import Searchbox from '../../components/Searchbox';
import Sortingbox from '../../components/Sortingbox';
import Hotel from '../../components/Hotel';

import styles from './styles';

const HomeScreen: FC = () => {
  const navigation = useNavigation<homeScreenProp>();
  return (
    <View style={styles.wrapper}>
      <Text onPress={() => navigation.push('Details')}>Home Screen</Text>
      <Title title={'Let\'\s select a hotel'} />
      <View style={styles.searchAndSort}>
        <Searchbox />
        <Sortingbox />
      </View>
      <Hotel />
    </View>
  );
};

export default HomeScreen;
