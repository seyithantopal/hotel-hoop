import React, { FC } from 'react';
import { View, TextInput } from 'react-native';
import { SearchboxType } from '../../utils/constants/interfaces';
import Search from '../../assets/icons/Search';

import styles from './styles';

const Searchbox: FC<SearchboxType> = ({ value, onChangeText }) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.textInputWrapper}>
        <TextInput
          style={styles.textInput}
          value={value}
          placeholder='Search'
          onChangeText={text => {
            onChangeText(text);
          }}
        />
      </View>
      <View style={styles.searchIconWrapper}>
        <Search />
      </View>
    </View>
  );
};

export default Searchbox;
