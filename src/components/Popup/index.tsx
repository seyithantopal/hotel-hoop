import React, { Dispatch, FC, SetStateAction } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MENU } from '../../utils/constants/common';
import { SortObjectType } from '../../types/interfaces';

import styles from './styles';

interface Props {
  onMenuItemPress: (sortBasedOn: SortObjectType) => void;
  setIsSortButtonOpen: Dispatch<SetStateAction<boolean>>;
}

const Popup: FC<Props> = ({ onMenuItemPress, setIsSortButtonOpen }) => {
  return (
    <View style={styles.wrapper}>
      {MENU.map((e, i) => {
        return (
          <TouchableOpacity
            onPress={() => {
              onMenuItemPress(e);
              setIsSortButtonOpen(false);
            }}>
            <Text key={i} style={styles.menu}>
              {e.text}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Popup;
