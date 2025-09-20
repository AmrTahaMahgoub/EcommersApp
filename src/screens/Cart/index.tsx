import React from 'react';
import {Button, FlatList, Image, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {Header} from '../../components/molecules';
import {RootState} from '../../redux';
import {clearCart, removeFromCart} from '../../redux/reducers/cartReducer';
import {Colors} from '../../styles';
import {styles} from './styles';
import {useTheme} from '../../components/Context/ThemeContext';

export default function Cart() {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.cartReducer.items);
  const {theme} = useTheme();
  const isDark = theme === 'dark';

  const renderItem = ({item}: any) => (
    <View style={styles.row}>
      <Image source={{uri: item.image}} style={styles.img} />
      <View style={styles.titles}>
        <Text style={styles.data}>{item.title}</Text>
        <Text  style={styles.data}>${item.price}</Text>
        <Text  style={styles.data}>Qty: {item.quantity}</Text>
        <TouchableOpacity
          style={styles.touchable}
          onPress={() => dispatch(removeFromCart(item.id))}>
          <Text style={styles.touchabletitle}>Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View
      style={[
        styles.main,
        {backgroundColor: isDark ? Colors.BLACK : Colors.WHITE},
      ]}>
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
            color={isDark ? Colors.GRAY_1E103A : Colors.BLACK}
            title="Clear Cart"
            
            onPress={() => dispatch(clearCart())}
          />
        </>
      )}
    </View>
  );
}
