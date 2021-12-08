import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../screens/RootStackParamList';

export type homeScreenProp = NativeStackScreenProps<RootStackParamList, 'Home'>;

export type detailsScreenProp = NativeStackScreenProps<
  RootStackParamList,
  'Details'
>;
