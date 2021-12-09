import { StyleSheet } from 'react-native';
import {
  COLOR_CONTACT_BOX_BACKGROUND,
  COLOR_CONTACT_EMAIL_TEXT,
  COLOR_CONTACT_PHONE_NUMBER_TEXT,
  COLOR_PRIMARY,
} from '../../utils/constants/color';

export default StyleSheet.create({
  wrapper: {
    backgroundColor: COLOR_CONTACT_BOX_BACKGROUND,
    padding: 10,
    marginTop: 20,
    borderRadius: 15,
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
  email: {
    fontSize: 16,
    color: COLOR_CONTACT_EMAIL_TEXT,
  },
  phoneNumber: {
    fontSize: 16,
    color: COLOR_CONTACT_PHONE_NUMBER_TEXT,
  },
});
