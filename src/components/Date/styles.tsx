import { StyleSheet } from 'react-native';
import {
  COLOR_DATE_BOX_BACKGROUND,
  COLOR_DATE_TIME_TEXT,
  COLOR_DATE_TITLE_TEXT,
  COLOR_PRIMARY,
} from '../../utils/constants/color';

export default StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLOR_DATE_BOX_BACKGROUND,
    padding: 10,
    marginTop: 20,
    borderRadius: 15,
  },
  iconWrapper: {
    backgroundColor: COLOR_PRIMARY,
    padding: 10,
    borderRadius: 10,
  },
  dateTitle: {
    color: COLOR_DATE_TITLE_TEXT,
  },
  dateTime: {
    color: COLOR_DATE_TIME_TEXT,
    fontWeight: '600',
    fontSize: 18,
  },
});
