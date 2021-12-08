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
            uri: 'https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg',
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
