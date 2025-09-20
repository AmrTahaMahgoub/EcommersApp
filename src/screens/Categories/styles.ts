import {StyleSheet} from 'react-native';
import {Colors, Spacing, Typography} from '../../styles';
import {getHeight, getWidth, scale} from '../../styles/dimensions';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Spacing.S11,
    backgroundColor: Colors.WHITE,
  },
  itemContainer: {
    marginBottom: Spacing.S16,
    height: getHeight(160),
    width: getWidth(160),
    borderRadius: scale(12),
    overflow: 'hidden',
    margin: Spacing.S11,
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: Spacing.S11,
  },
  text: {
    color: Colors.WHITE,
    fontSize: Typography.FS10,
    fontWeight: '500',
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: Spacing.S4,
  },
});
