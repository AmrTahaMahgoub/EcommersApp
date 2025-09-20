import React from 'react';
import {Button, FlatList, Image, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {Header} from '../../components/molecules';
import {RootState} from '../../redux';
import {clearCart, removeFromCart} from '../../redux/reducers/cartReducer';
import {Colors} from '../../styles';
import {styles} from './styles';

export default function Cart() {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.cartReducer.items);

  const renderItem = ({item}: any) => (
    <View style={styles.row}>
      <Image source={{uri: item.image}} style={styles.img} />
      <View style={styles.titles}>
        <Text>{item.title}</Text>
        <Text>${item.price}</Text>
        <Text>Qty: {item.quantity}</Text>
        <TouchableOpacity
          style={styles.touchable}
          onPress={() => dispatch(removeFromCart(item.id))}>
          <Text style={styles.touchabletitle}>Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.main}>
      <Header title="Cart" />
      {items.length === 0 ? (
        <Text style={styles.empty}>Your cart is empty</Text>
      ) : (
        <>
          <FlatList
            data={items}
            keyExtractor={i => i.id.toString()}
            renderItem={renderItem}
            contentContainerStyle={styles.containerStyle}
          />

          <Button
            color={Colors.BLACK}
            title="Clear Cart"
            onPress={() => dispatch(clearCart())}
          />
        </>
      )}
    </View>
  );
}
