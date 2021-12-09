import { StyleSheet } from 'react-native';
import { COLOR_POPUP_BACKGROUND } from '../../utils/constants/color';

export default StyleSheet.create({
  wrapper: {
    width: 170,
    position: 'absolute',
    backgroundColor: COLOR_POPUP_BACKGROUND,
    padding: 10,
    right: 0,
    top: 48,
    borderRadius: 10,
  },
  menu: {
    padding: 5,
    fontSize: 16,
  },
});
