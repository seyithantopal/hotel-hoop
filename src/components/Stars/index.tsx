import React, { FC } from 'react';
import { View } from 'react-native';
import Star from '../../assets/icons/Star';

import styles from './styles';

const Stars: FC<{ stars: number }> = ({ stars }) => {
  const printStars = () => {
    let items = [];
    for (let i = 1; i <= 5; i++) {
      i <= stars
        ? items.push(<Star active={true} />)
        : items.push(<Star active={false} />);
    }
    return items;
  };
  return <View style={styles.stars}>{printStars()}</View>;
};

export default Stars;
