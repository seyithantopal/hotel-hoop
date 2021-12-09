import { StyleSheet } from 'react-native';
import {
  COLOR_LOCATION_TEXT,
  COLOR_TITLE,
  COLOR_USER_RATING_TEXT,
} from '../../utils/constants/color';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  detailsWrapper: {
    padding: 20,
    flex: 1,
  },
  detailsTitle: {
    fontSize: 26,
    color: COLOR_TITLE,
    fontWeight: '700',
  },
  ratingWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  userRating: {
    marginLeft: 10,
    fontSize: 18,
    color: COLOR_USER_RATING_TEXT,
  },
  locationWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  location: {
    marginLeft: 5,
    fontSize: 18,
    color: COLOR_LOCATION_TEXT,
  },
});
