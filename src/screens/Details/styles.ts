import {StyleSheet} from 'react-native';
import {Colors} from '../../styles';
import {scale} from '../../styles/dimensions';

export const getThemedStyles = (isDark: boolean) =>
  StyleSheet.create({
    mainRoot: {
      flex: 1,
      backgroundColor: isDark ? '#121212' : '#f7f7f7',
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
      color: isDark ? Colors.WHITE : Colors.BLACK,
      marginBottom: scale(4),
    },

    price: {
      fontSize: scale(18),
      fontWeight: '700',
      color: isDark ? Colors.YELLOW : Colors.PRIMARY || '#1e90ff',
      marginBottom: scale(8),
    },

    description: {
      fontSize: scale(15),
      lineHeight: scale(22),
      color: isDark ? '#ccc' : '#555',
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
      color: isDark ? Colors.WHITE : Colors.BLACK,
    },

    averageCountContainer: {
      padding: scale(12),
      borderRadius: scale(8),
      backgroundColor: isDark ? '#1e1e1e' : Colors.WHITE,
      shadowColor: '#000',
      shadowOpacity: isDark ? 0.2 : 0.05,
      shadowRadius: 4,
      elevation: 3,
      marginTop: scale(10),
    },

    category: {
      fontWeight: '700',
      fontSize: 16,
      color: isDark ? Colors.WHITE : Colors.BLACK,
    },
  });
