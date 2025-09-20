import {StyleSheet} from 'react-native';
import {Colors, Spacing, Typography} from '../../../styles';
import {getHeight, scale} from '../../../styles/dimensions';

export const styles = StyleSheet.create({
  card: {
    marginHorizontal: Spacing.S11,
    marginVertical: Spacing.S8,
    borderRadius: scale(12),
    overflow: 'hidden',
    backgroundColor: Colors.PRIMARY1,
    shadowRadius: 4,
    shadowOffset: {width: 0, height: 2},
  },

  image: {
    height: getHeight(200),
    width: '100%',
    justifyContent: 'space-between',
  },
  title: {color: 'white', fontSize: Typography.FS16},
  touchable: {
    backgroundColor: Colors.YELLOW,
    width: scale(60),
    height: scale(60),
    borderRadius: scale(30),
    justifyContent: 'center',
    alignSelf: 'flex-end',
  },
  titleRatingContainer: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    paddingHorizontal: Spacing.S8,
    paddingVertical: Spacing.S4,
  },

  detailsContainer: {
    backgroundColor: 'rgba(0,0,0,0.35)',
    padding: Spacing.S8,
  },

  price: {
    color: '#fff',
    fontSize: Typography.FS16,
    fontWeight: '700',
    marginBottom: Spacing.S4,
  },

  category: {
    color: '#eee',
    fontSize: Typography.FS13,
    marginBottom: Spacing.S2,
  },

  description: {
    color: '#f5f5f5',
    fontSize: Typography.FS11,
  },
  icon: {
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
  },
});
