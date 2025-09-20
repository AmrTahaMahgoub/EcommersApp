import {StyleSheet} from 'react-native';
import {Colors, Spacing, Typography} from '../../styles';
import {getHeight, getWidth, scale} from '../../styles/dimensions';

export const styles = StyleSheet.create({
  itemContainer: {
    marginBottom: Spacing.S16,
    height: getHeight(160),
    width: getWidth(160),
    borderRadius: scale(12),
    overflow: 'hidden',
    margin: Spacing.S11,
    borderWidth: 2,
    borderColor: Colors.YELLOW,
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
  container: {
    flex: 1,
    paddingHorizontal: 12,
    paddingTop: 12,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
  },
});
