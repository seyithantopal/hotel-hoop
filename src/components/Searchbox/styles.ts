import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    flex: 1,
  },
  textInputWrapper: {
    width: '100%',
  },
  searchIconWrapper: {
    position: 'absolute',
    marginLeft: 15,
  },
  textInput: {
    backgroundColor: '#fff',
    borderRadius: 15,
    paddingLeft: 45,
    paddingRight: 10,
    fontSize: 18,
    color: '#000',
  },
});
