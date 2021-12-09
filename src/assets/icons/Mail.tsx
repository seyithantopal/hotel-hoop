import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { COLOR_MAIL_ICON_STROKE } from '../../utils/constants/color';

export default () => {
  return (
    <Svg width={24} height={24} fill="none">
      <Path
        d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2Z"
        stroke={COLOR_MAIL_ICON_STROKE}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="m22 6-10 7L2 6"
        stroke={COLOR_MAIL_ICON_STROKE}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
