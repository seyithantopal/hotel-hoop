import { StyleSheet } from 'react-native';
import { COLOR_BACKGROUND } from '../../utils/constants/color';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: COLOR_BACKGROUND,
    padding: 15,
  },
  searchAndSort: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
