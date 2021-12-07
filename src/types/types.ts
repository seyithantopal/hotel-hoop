import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../screens/RootStackParamList';

export type homeScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

export type detailsScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  'Details'
>;
