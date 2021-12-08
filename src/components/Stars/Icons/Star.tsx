import React from 'react';
import Svg, { Path } from 'react-native-svg';
import {
  COLOR_STAR_BACKGROUND_ACTIVE,
  COLOR_STAR_BACKGROUND_PASSIVE,
} from '../../../utils/constants/color';

export default ({ active }) => {
  const COLOR = active
    ? COLOR_STAR_BACKGROUND_ACTIVE
    : COLOR_STAR_BACKGROUND_PASSIVE;
  return (
    <Svg width={24} height={24} fill={COLOR}>
      <Path
        d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z"
        stroke={COLOR}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
