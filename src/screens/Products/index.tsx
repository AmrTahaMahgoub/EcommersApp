import React, {useCallback, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  ListRenderItem,
  Text,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Product} from '../../@types';
import ProductItem from '../../components/organisms/productItem';
import {useNavigationHooks} from '../../hooks/navigation-hooks';
import {AppDispatch, RootState} from '../../redux';
import {getProducts} from '../../redux/actions/productActions';
import {addToCart} from '../../redux/reducers/cartReducer';
import {styles} from './styles';

export default function Products() {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch<AppDispatch>();
  const {navigate} = useNavigationHooks<any>();

  const {products, loading, error} = useSelector(
    (state: RootState) => state.productReducer,
  );
  const goToDetails = (id: number) => {
    navigate('Details', {id});
  };

  useEffect(() => {
    dispatch(getProducts(page, 10));
  }, [page, dispatch]);

  const handleLoadMore = useCallback(() => {
    if (!loading && products.length >= page * 10) {
      setPage(prev => prev + 1);
    }
  }, [loading, products.length, page]);

  const renderItem = useCallback<ListRenderItem<Product>>(
    ({item}) => (
      <ProductItem
        onPressCard={() => {
          navigate("Details", {ProductDetails: item});
        }}
        {...item}
        onPress={() => {
          dispatch(
            addToCart({
              id: item.id,
              title: item.title,
              price: item.price,
              quantity: 1,
              image: item?.images?.[0],
            }),
          );
          navigate('Cart' as never);
        }}
      />
    ),
    [dispatch, navigate],
  );

  return (
    <View style={styles.main}>
      {error ? (
        <Text style={{color: 'red'}}>{error}</Text>
      ) : (
        <FlatList
          data={products}
          renderItem={renderItem}
          keyExtractor={item => `product-${item.id}`}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.3}
          ListFooterComponent={
            loading ? <ActivityIndicator size="small" color="gray" /> : null
          }
          initialNumToRender={10}
          maxToRenderPerBatch={10}
          windowSize={7}
          removeClippedSubviews
        />
      )}
    </View>
  );
}
