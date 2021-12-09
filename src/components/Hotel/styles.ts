import { StyleSheet } from 'react-native';
import {
  COLOR_LOCATION_TEXT,
  COLOR_PRIMARY,
  COLOR_HOTEL_BACKGROUND,
  COLOR_PRICE_TEXT,
  COLOR_USER_RATING_TEXT,
} from '../../utils/constants/color';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  hotelWrapper: {
    backgroundColor: COLOR_HOTEL_BACKGROUND,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
    padding: 7,
    borderRadius: 20,
  },
  hotelImage: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  leftWrapper: {
    width: 200,
  },
  rightWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    height: '100%',
  },
  hotelFeaturesWrapper: {
    width: '100%',
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  hotelName: {
    fontSize: 21,
    fontWeight: '700',
  },
  hotelLocationWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  hotelLocation: {
    fontSize: 18,
    fontWeight: '700',
    marginLeft: 5,
    color: COLOR_LOCATION_TEXT,
  },
  hotelPriceWrapper: {
    backgroundColor: COLOR_PRIMARY,
    bottom: 35,
    padding: 10,
    borderRadius: 10,
    fontSize: 21,
  },
  hotelPrice: {
    fontSize: 16,
    fontWeight: '500',
    color: COLOR_PRICE_TEXT,
  },
  hotelUserRating: {
    fontSize: 18,
    fontWeight: '700',
    color: COLOR_USER_RATING_TEXT,
  },
});
