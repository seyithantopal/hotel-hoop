import React, { FC } from 'react';
import { View, Text, Image } from 'react-native';

import Pin from './Icons/Pin';
import Stars from '../Stars';
import styles from './styles';

const Hotel: FC = () => {
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
            <Text style={styles.hotelName}>Deluxe Room</Text>
            <View style={styles.hotelLocationWrapper}>
              <Pin />
              <Text style={styles.hotelLocation}>London</Text>
            </View>
          </View>
          <View style={styles.rightWrapper}>
            <Stars stars={3} />
            <Text style={styles.hotelUserRating}>9.8</Text>
          </View>
        </View>
        <View style={styles.hotelPriceWrapper}>
          <Text style={styles.hotelPrice}>€20 / night</Text>
        </View>
      </View>
    </View>
  );
};

export default Hotel;
