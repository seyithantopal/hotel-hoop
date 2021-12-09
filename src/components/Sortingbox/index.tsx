import React, { FC, useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import Sorting from '../../assets/icons/Sorting';
import { SortObjectType } from '../../types/interfaces';
import Popup from '../Popup';

import styles from './styles';

interface Props {
  onMenuItemPress: (sortBasedOn: SortObjectType) => void;
}

const Sortingbox: FC<Props> = ({ onMenuItemPress }) => {
  const [isSortButtonOpen, setIsSortButtonOpen] = useState<boolean>(true);
  return (
    <View style={styles.wrapper}>
      {isSortButtonOpen && (
        <Popup
          onMenuItemPress={onMenuItemPress}
          setIsSortButtonOpen={setIsSortButtonOpen}
        />
      )}
      <TouchableOpacity
        onPress={() => {
          setIsSortButtonOpen(!isSortButtonOpen);
        }}>
        <View style={styles.sortingWrapper}>
          <Sorting />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Sortingbox;
