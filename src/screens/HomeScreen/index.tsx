import React, { FC } from 'react';
import { View, Text, FlatList, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { homeScreenProp } from '../../types/types';
import { HotelType } from '../../utils/constants/interfaces';

// Components
import Title from '../../components/Title';
import Searchbox from '../../components/Searchbox';
import Sortingbox from '../../components/Sortingbox';
import Hotel from '../../components/Hotel';

import styles from './styles';

const hotels = [
  {
    "id": 12321,
    "name": "Park Plaza London Waterloo",
    "location": {
      "address": "6 Hercules Road",
      "city": "London",
      "latitude": 51.49845,
      "longitude": -0.11343
    },
    "stars": 4,
    "checkIn": {
      "from": "14:00",
      "to": "20:00"
    },
    "checkOut": {
      "from": "07:00",
      "to": "10:00"
    },
    "contact": {
      "phoneNumber": "+39 24322342",
      "email": "park_plaza@gmail.com"
    },
    "gallery": [
      "https://res.cloudinary.com/lastminute/image/upload/t_OSE_redes_item_view/v1499779963/Swindon_yjsrwz.jpg"
    ],
    "userRating": 9.8,
    "price": 120,
    "currency": "EUR"
  },
  {
    "id": 12322,
    "name": "Belgrave House Hotel",
    "location": {
      "address": "28-32 Belgrave Road Victoria",
      "city": "London",
      "latitude": 51.49241,
      "longitude": -0.14283
    },
    "stars": 4,
    "checkIn": {
      "from": "12:00",
      "to": "20:00"
    },
    "checkOut": {
      "from": "07:00",
      "to": "10:00"
    },
    "contact": {
      "phoneNumber": "+44 5477432",
      "email": "belgrave@gmail.com"
    },
    "gallery": [
      "https://res.cloudinary.com/lastminute/image/upload/t_OSE_redes_item_view/v1602584265/g8wzbaqahffteguzal5d.jpg",
      "https://res.cloudinary.com/lastminute/image/upload/t_OSE_redes_item_view/v1602584267/zvpg4qui6pqp6t9lzmfz.jpg",
      "https://res.cloudinary.com/lastminute/image/upload/t_OSE_redes_item_view/v1602584269/storgpwbactbomqnevn5.jpg",
      "https://res.cloudinary.com/lastminute/image/upload/t_OSE_redes_item_view/v1491054438/Living_Area_26_7_mdxypk.jpg",
      "https://res.cloudinary.com/lastminute/image/upload/t_OSE_redes_item_view/v1491054438/Living_Area_25_6_rkyqhx.jpg",
      "https://res.cloudinary.com/lastminute/image/upload/t_OSE_redes_item_view/v1491054437/Guestroom_31_9_s2va2b.jpg",
      "https://res.cloudinary.com/lastminute/image/upload/t_OSE_redes_item_view/v1491054437/Guestroom_32_4_rpuq3s.jpg"
    ],
    "userRating": 7.8,
    "price": 100,
    "currency": "EUR"
  },
  {
    "id": 12323,
    "name": "Crowne Plaza LONDON - KINGS CROSS",
    "location": {
      "address": "1 Kings Cross Road",
      "city": "London",
      "latitude": 51.52647,
      "longitude": -0.11325
    },
    "stars": 4,
    "checkIn": {
      "from": "11:00",
      "to": "20:00"
    },
    "checkOut": {
      "from": "07:00",
      "to": "12:00"
    },
    "contact": {
      "phoneNumber": "+44 5432356",
      "email": "crowne_plaza@gmail.com"
    },
    "gallery": [
      "https://res.cloudinary.com/lastminute/image/upload/t_OSE_redes_item_view/v1602584108/w5c81p3mvlymgutaklvx.jpg",
      "https://res.cloudinary.com/lastminute/image/upload/t_OSE_redes_item_view/v1602584110/xcpweycgssuafcwelsfi.jpg",
      "https://res.cloudinary.com/lastminute/image/upload/t_OSE_redes_item_view/v1602584112/jszs6ir3v6rt7oz23wo2.jpg",
      "https://res.cloudinary.com/lastminute/image/upload/t_OSE_redes_item_view/v1602584114/hq2suefoj8jgtmsklzic.jpg",
      "https://res.cloudinary.com/lastminute/image/upload/t_OSE_redes_item_view/v1602584116/oiycgfo6nyihkw5mzaur.jpg",
      "https://res.cloudinary.com/lastminute/image/upload/t_OSE_redes_item_view/v1602584118/o91al0de2i3iofi3cpcl.jpg",
      "https://res.cloudinary.com/lastminute/image/upload/t_OSE_redes_item_view/v1602584120/jeu5kw5yck3eqiyudcgp.jpg"
    ],
    "userRating": 8.1,
    "price": 200,
    "currency": "EUR"
  },
];

const HomeScreen: FC<homeScreenProp> = ({ navigation }) => {
  const handleNavigate = (hotel: HotelType) => {
    navigation.push('Details', hotel);
  };
  return (
    <View style={styles.wrapper}>
      <Title title={'Let\'\s select a hotel'} />
      <View style={styles.searchAndSort}>
        <Searchbox />
        <Sortingbox />
      </View>
      <FlatList
        data={hotels}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        style={styles.hotelList}
        renderItem={({ item }) => {
          return (
            <TouchableWithoutFeedback onPress={() => handleNavigate(item)}>
              <View style={styles.hotel}>
                <Hotel hotel={item} />
              </View>
            </TouchableWithoutFeedback>
          );
        }}
      />
    </View>
  );
};

export default HomeScreen;
