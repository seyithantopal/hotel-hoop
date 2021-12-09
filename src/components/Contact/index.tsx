import React, { FC } from 'react';
import { View, Text } from 'react-native';
import Mail from '../../assets/icons/Mail';
import Phone from '../../assets/icons/Phone';

import styles from './styles';

const Contact: FC = ({ contact }) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.heading}>Contact</Text>
      <View style={styles.mailWrapper}>
        <View style={styles.mailIconWrapper}>
          <Mail />
        </View>
        <Text style={styles.email}>{contact.email}</Text>
      </View>
      <View style={styles.phoneWrapper}>
        <View style={styles.phoneIconWrapper}>
          <Phone />
        </View>
        <Text style={styles.phoneNumber}>{contact.phoneNumber}</Text>
      </View>
    </View>
  );
};

export default Contact;
