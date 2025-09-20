import { StyleSheet } from 'react-native';
import { Colors } from '../../styles';
import { getHeight, getWidth } from '../../styles/dimensions';

export const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: getWidth(120),
    height: getHeight(120),
    alignContent: 'center',
    alignSelf: 'center',
  },
});
