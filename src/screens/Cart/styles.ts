import {StyleSheet} from 'react-native';
import {Colors, Spacing, Typography} from '../../styles';
import {getHeight, getWidth} from '../../styles/dimensions';

export const styles = StyleSheet.create({
  main: {flex: 1},
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: Spacing.S11,
    justifyContent: 'center',
  },
  img: {
    width: getHeight(100),
    height: getWidth(100),
    borderRadius: Spacing.S11,
  },
  containerStyle: {paddingBottom: Spacing.S20},
  touchable: {
    width: getWidth(200),
    height: getHeight(50),
    backgroundColor: Colors.RED,
    justifyContent: 'center',
    borderRadius: Spacing.S16,
  },
  touchabletitle: {
    color: Colors.BLACK,
    textAlign: 'center',
  },
  titles: {flex: 1, marginLeft: Spacing.S8},
  empty: {
    color: 'red',
    fontSize: Typography.FS18,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: getHeight(320),
  },
  data: {color:Colors.PRIMARY}
});
