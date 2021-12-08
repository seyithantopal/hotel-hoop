import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { COLOR_SEARCH_ICON_STROKE } from '../../../utils/constants/color';

export default () => {
  return (
    <Svg width={24} height={24} fill="none">
      <Path
        d="M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM21 21l-4.35-4.35"
        stroke={COLOR_SEARCH_ICON_STROKE}
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
