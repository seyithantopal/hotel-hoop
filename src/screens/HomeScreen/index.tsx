import React, { FC, useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableWithoutFeedback } from 'react-native';
import axios from 'axios';
import { homeScreenProp } from '../../types/types';
import { HotelType } from '../../utils/constants/interfaces';

// Components
import Title from '../../components/Title';
import Searchbox from '../../components/Searchbox';
import Sortingbox from '../../components/Sortingbox';
import Hotel from '../../components/Hotel';

import styles from './styles';

const HomeScreen: FC<homeScreenProp> = ({ navigation }) => {
  const [hotels, setHotels] = useState<HotelType[]>([]);
  const [filteredHotels, setFilteredHotels] = useState<HotelType[]>([]);
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    const fetchHotels = async () => {
      const { data: hotelsList } = await axios.get(
        'https://run.mocky.io/v3/eef3c24d-5bfd-4881-9af7-0b404ce09507',
      );
      setHotels(hotelsList);
      setFilteredHotels(hotelsList);
    };
    fetchHotels();
  }, []);

  const handleNavigate = (hotel: HotelType) => {
    navigation.push('Details', hotel);
  };

  const onChangeText = (text: string) => {
    setSearch(text);
    const filteredData = hotels.filter(hotel =>
      hotel.name.toLowerCase().includes(text.toLowerCase()),
    );
    setFilteredHotels(filteredData);
  };
  return (
    <View style={styles.wrapper}>
      <Title title={'Let\'\s select a hotel'} />
      <View style={styles.searchAndSort}>
        <Searchbox value={search} onChangeText={onChangeText} />
        <Sortingbox />
      </View>
      <FlatList
        data={filteredHotels}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        style={styles.hotelList}
        ListEmptyComponent={() => {
          return (
            <View style={styles.noDataWrapper}>
              <Text style={styles.noData}>There is no record</Text>
            </View>
          );
        }}
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
