import {StyleSheet} from 'react-native';
import {Colors, Spacing, Typography} from '../../../styles';
import {getWidth} from '../../../styles/dimensions';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: getWidth(200),
    marginTop: Spacing.S11,
  },
  title: {
    textAlign: 'center',
    marginRight: Spacing.S2,
    color: Colors.BLACK,
    fontSize: Typography.FS16,
    fontWeight: '500',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backText: {
    color: Colors.PRIMARY,
    marginRight: Spacing.S4,
  },
});
