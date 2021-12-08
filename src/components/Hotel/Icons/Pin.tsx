import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { COLOR_PIN_ICON_STROKE } from '../../../utils/constants/color';

export default () => {
  return (
    <Svg width={24} height={24} fill="none">
      <Path
        d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0Z"
        stroke={COLOR_PIN_ICON_STROKE}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        stroke={COLOR_PIN_ICON_STROKE}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
