import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { COLOR_DATE_ICON_STROKE } from '../../utils/constants/color';

export default () => {
  return (
    <Svg width={24} height={24} fill="none">
      <Path
        d="M19 4H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2ZM16 2v4M8 2v4M3 10h18"
        stroke={COLOR_DATE_ICON_STROKE}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
