import {RouteProp, useRoute} from '@react-navigation/native';
import React, {FC} from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {Header} from '../../components/molecules';
import {MainAppStackTypes} from '../../navigation/navigation-types';

import {useTheme} from '../../components/Context/ThemeContext';
import {getThemedStyles} from './styles';

const Details: FC = () => {
  const {
    params: {ProductDetails},
  } = useRoute<RouteProp<MainAppStackTypes, 'Details'>>();

  const {theme} = useTheme();
  const isDark = theme === 'dark';

  const themed = getThemedStyles(isDark);

  return (
    <View style={themed.mainRoot}>
      <Header title="Details" />
      <View style={themed.container}>
        <ImageBackground
          source={{uri: ProductDetails.images?.[0]}}
          style={themed.image}
          resizeMode="cover"
        />
        <View style={themed.titlePopularityContainer}>
          <Text style={themed.title}>{ProductDetails.title}</Text>
          <Text style={themed.price}>${ProductDetails.price}</Text>
        </View>

        <Text style={themed.description}>{ProductDetails.description}</Text>

        <View style={themed.ratingContainer}>
          <Text style={themed.ratingText}>
            Rating: {ProductDetails.rating?.rate} ⭐
          </Text>
          <Text style={themed.ratingText}>
            ({ProductDetails.rating?.count} reviews)
          </Text>
        </View>

        <View style={themed.averageCountContainer}>
          <Text style={themed.category}>
            Category: {ProductDetails.category?.name}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Details;
