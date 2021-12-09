import React, { FC } from 'react';
import { View, Text } from 'react-native';
import VerticalDivider from '../VerticalDivider';
import DateIcon from '../../assets/icons/Date';

import styles from './styles';

const Date: FC = ({ checkIn, checkOut }) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.iconWrapper}>
        <DateIcon />
      </View>
      <View>
        <Text style={styles.dateTitle}>Check in</Text>
        <Text style={styles.dateTime}>{`${checkIn.from} - ${checkIn.to}`}</Text>
      </View>
      <VerticalDivider />
      <View>
        <Text style={styles.dateTitle}>Check out</Text>
        <Text style={styles.dateTime}>{`${checkOut.from} - ${checkOut.to}`}</Text>
      </View>
    </View>
  );
};

export default Date;
