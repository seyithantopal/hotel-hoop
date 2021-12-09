import { StyleSheet } from 'react-native';
import { COLOR_BACKGROUND, COLOR_PRIMARY } from '../../utils/constants/color';

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
  hotelList: {
    marginTop: 20,
  },
  hotel: {
    marginBottom: 10,
  },
  noDataWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  noData: {
    fontSize: 28,
    fontWeight: '600',
    color: COLOR_PRIMARY,
  },
});
