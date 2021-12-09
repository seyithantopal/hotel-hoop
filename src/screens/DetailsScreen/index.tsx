import React, { FC } from 'react';
import { View, Text, FlatList, ScrollView } from 'react-native';
import { detailsScreenProp } from '../../types/types';

import Gallery from '../../components/Gallery';
import Title from '../../components/Title';
import Date from '../../components/Date';
import Contact from '../../components/Contact';
import styles from './styles';

const DetailsScreen: FC<detailsScreenProp> = ({ route }) => {
  const { name, gallery, checkIn, checkOut, contact } = route.params;
  return (
    <View style={styles.wrapper}>
      <Gallery gallery={gallery} />
      <View style={styles.detailsWrapper}>
        <ScrollView
          style={styles.detailsScrollView}
          showsVerticalScrollIndicator={true}>
          <Title title={name} />
          <Date checkIn={checkIn} checkOut={checkOut} />
          <Contact contact={contact} />
        </ScrollView>
      </View>
    </View>
  );
};

export default DetailsScreen;
