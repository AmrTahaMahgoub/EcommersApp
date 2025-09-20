import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MainAppStackTypes} from '../navigation/navigation-types';

export const useNavigationHooks = <T = MainAppStackTypes>() =>
  useNavigation<NativeStackNavigationProp<T>>();