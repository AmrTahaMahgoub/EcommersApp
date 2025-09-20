import {StyleSheet} from 'react-native';
import {Colors} from '../../styles';
import {scale} from '../../styles/dimensions';

export const styles = StyleSheet.create({
  mainRoot: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },

  container: {
    flex: 1,
    paddingHorizontal: scale(16),
    paddingVertical: scale(20),
  },

  image: {
    width: '100%',
    height: scale(220),
    borderRadius: scale(12),
    marginBottom: scale(16),
    overflow: 'hidden',
  },

  titlePopularityContainer: {
    marginBottom: scale(12),
  },

  title: {
    fontSize: scale(20),
    fontWeight: '700',
    color: Colors.BLACK,
    marginBottom: scale(4),
  },

  price: {
    fontSize: scale(18),
    fontWeight: '700',
    color: Colors.PRIMARY || '#1e90ff',
    marginBottom: scale(8),
  },

  description: {
    fontSize: scale(15),
    lineHeight: scale(22),
    color: '#555',
    marginBottom: scale(16),
  },

  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(12),
    marginBottom: scale(20),
  },

  ratingText: {
    fontSize: scale(15),
    fontWeight: '600',
    color: Colors.BLACK,
  },

  averageCountContainer: {
    padding: scale(12),
    borderRadius: scale(8),
    backgroundColor: Colors.WHITE,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 3,
    marginTop: scale(10),
  },
});
