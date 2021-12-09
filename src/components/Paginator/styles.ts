import { StyleSheet } from 'react-native';
import { COLOR_DOT_BACKGROUND } from '../../utils/constants/color';

export default StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 20,
  },
  dot: {
    height: 10,
    borderRadius: 5,
    backgroundColor: COLOR_DOT_BACKGROUND,
    marginHorizontal: 3,
  },
});
