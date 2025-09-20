import React, {memo} from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {Svgs} from '../../../assets';
import {useNavigationHooks} from '../../../hooks/navigation-hooks';
import {addToCart} from '../../../redux/reducers/cartReducer';
import {styles} from './styles';

type ProductItemProps = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: {id: number; name: string};
  images: string[];
  onPressCard: (id: number) => void;
};

function ProductItem({
  id,
  title,
  price,
  description,
  category,
  images,
  onPressCard,
}: ProductItemProps) {
  const dispatch = useDispatch();
  const {navigate} = useNavigationHooks<any>();
  const imageUri = images?.[0];

  const handlePress = () => {
    dispatch(
      addToCart({
        id,
        title,
        price,
        quantity: 1,
        image: imageUri,
      }),
    );
    navigate('Cart');
  };

  return (
    <TouchableOpacity onPress={() => onPressCard(id)} style={styles.card}>
      <ImageBackground
        resizeMode="cover"
        style={styles.image}
        source={{uri: imageUri}}>
        <View style={styles.titleRatingContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
        </View>
        <TouchableOpacity onPress={handlePress} style={styles.touchable}>
          <Svgs name="addcart" style={styles.icon} />
        </TouchableOpacity>
        <View style={styles.detailsContainer}>
          <Text style={styles.price}>${price}</Text>
          <Text style={styles.category}>{category?.name}</Text>
          <Text style={styles.description} numberOfLines={2}>
            {description}
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}

export default memo(ProductItem);
