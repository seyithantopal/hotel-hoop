import React, { FC } from 'react';
import { View, Text, Image } from 'react-native';
import { HotelType } from '../../utils/constants/interfaces';
import Pin from './Icons/Pin';
import Stars from '../Stars';

import styles from './styles';

const Hotel: FC<{ hotel: HotelType }> = ({ hotel }) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.hotelWrapper}>
        <Image
          style={styles.hotelImage}
          source={{
            uri: hotel.gallery[0],
          }}
        />
        <View style={styles.hotelFeaturesWrapper}>
          <View style={styles.leftWrapper}>
            <Text style={styles.hotelName}>{hotel.name}</Text>
            <View style={styles.hotelLocationWrapper}>
              <Pin />
              <Text style={styles.hotelLocation}>{hotel.location.city}</Text>
            </View>
          </View>
          <View style={styles.rightWrapper}>
            <View style={styles.hotelPriceWrapper}>
              <Text
                style={
                  styles.hotelPrice
                }>{`${hotel.price}${hotel.currency} / night`}</Text>
            </View>
            <Stars stars={hotel.stars} />
            <Text style={styles.hotelUserRating}>{hotel.userRating}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Hotel;
