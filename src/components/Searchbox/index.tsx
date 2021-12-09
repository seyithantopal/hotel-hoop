import React, { FC, useState } from 'react';
import { View, TextInput } from 'react-native';

import Search from '../../assets/icons/Search';
import styles from './styles';

const Searchbox: FC = () => {
  const [search, setSearch] = useState<string>('');

  const handleSearch = (text: string) => {
    setSearch(text);
  };
  return (
    <View style={styles.wrapper}>
      <View style={styles.textInputWrapper}>
        <TextInput
          style={styles.textInput}
          value={search}
          placeholder='Search'
          onChangeText={handleSearch}
        />
      </View>
      <View style={styles.searchIconWrapper}>
        <Search />
      </View>
    </View>
  );
};

export default Searchbox;
