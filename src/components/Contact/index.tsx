import React, { FC } from 'react';
import { View, Text } from 'react-native';
import Mail from './Icons/Mail';
import Phone from './Icons/Phone';

import styles from './styles';

const Contact: FC = ({ contact }) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.heading}>Contact</Text>
      <View style={styles.mailWrapper}>
        <View style={styles.mailIconWrapper}>
          <Mail />
        </View>
        <Text>{contact.email}</Text>
      </View>
      <View style={styles.phoneWrapper}>
        <View style={styles.phoneIconWrapper}>
          <Phone />
        </View>
        <Text>{contact.phoneNumber}</Text>
      </View>
    </View>
  );
};

export default Contact;