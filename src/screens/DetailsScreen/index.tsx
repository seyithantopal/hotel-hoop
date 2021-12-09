import React, { FC } from 'react';
import { View, Text, FlatList, ScrollView } from 'react-native';
import { detailsScreenProp } from '../../types/types';

import Gallery from '../../components/Gallery';
import Title from '../../components/Title';
import Date from '../../components/Date';
import Contact from '../../components/Contact';
import Stars from '../../components/Stars';
import styles from './styles';
import Pin from '../../assets/icons/Pin';

const DetailsScreen: FC<detailsScreenProp> = ({ route }) => {
  const { name, gallery, checkIn, checkOut, contact, stars, userRating, location } = route.params;
  return (
    <View style={styles.wrapper}>
      <Gallery gallery={gallery} />
      <View style={styles.detailsWrapper}>
        <ScrollView
          // style={styles.detailsScrollView}
          showsVerticalScrollIndicator={true}>
          <View>
            <Text style={styles.detailsTitle}>{name}</Text>
            <View style={styles.ratingWrapper}>
              <Stars stars={stars} />
              <Text style={styles.userRating}>{userRating}</Text>
            </View>
            <View style={styles.locationWrapper}>
              <Pin />
              <Text style={styles.location}>{location.city}</Text>
            </View>
          </View>
          <Date checkIn={checkIn} checkOut={checkOut} />
          <Contact contact={contact} />
        </ScrollView>
      </View>
    </View>
  );
};

export default DetailsScreen;
