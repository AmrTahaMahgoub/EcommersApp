import {RouteProp, useRoute} from '@react-navigation/native';
import React, {FC} from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {MainAppStackTypes} from '../../navigation/navigation-types';
import {styles} from './styles';
import {Header} from '../../components/molecules';

const Details: FC = () => {
  const {
    params: {ProductDetails},
  } = useRoute<RouteProp<MainAppStackTypes, 'Details'>>();
  return (
<View style={styles.mainRoot}>
  <Header title="Details" />
  <View style={styles.container}>
    <ImageBackground
      source={{uri: ProductDetails.images?.[0]}}
      style={styles.image}
      resizeMode="cover"
    />
    <View style={styles.titlePopularityContainer}>
      <Text style={styles.title}>{ProductDetails.title}</Text>
      <Text style={styles.price}>${ProductDetails.price}</Text>
    </View>

    <Text style={styles.description}>{ProductDetails.description}</Text>

    <View style={styles.ratingContainer}>
      <Text style={styles.ratingText}>
        Rating: {ProductDetails.rating?.rate} ⭐
      </Text>
      <Text style={styles.ratingText}>
        ({ProductDetails.rating?.count} reviews)
      </Text>
    </View>

    <View style={styles.averageCountContainer}>
      <Text style={{fontWeight: '700', fontSize: 16}}>
        Category: {ProductDetails.category?.name}
      </Text>
    </View>
  </View>
</View>

  );
};

export default Details;
