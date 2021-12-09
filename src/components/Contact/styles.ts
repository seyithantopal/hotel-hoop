import { StyleSheet } from 'react-native';
import { COLOR_PRIMARY } from '../../utils/constants/color';

export default StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
    padding: 10,
    marginTop: 20,
  },
  heading: {
    fontSize: 24,
    marginBottom: 10,
  },
  mailWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  phoneWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  mailIconWrapper: {
    backgroundColor: COLOR_PRIMARY,
    padding: 10,
    borderRadius: 10,
    marginRight: 10,
  },
  phoneIconWrapper: {
    backgroundColor: COLOR_PRIMARY,
    padding: 10,
    borderRadius: 10,
    marginRight: 10,
  },
});
