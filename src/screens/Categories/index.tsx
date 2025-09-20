import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, ImageBackground} from 'react-native';
import axios from 'axios';
import {styles} from './styles';

type Category = {
  id: number;
  name: string;
  image: string;
};

export default function CategoriesScreen() {
  const [categories, setCategories] = useState<Category[]>([]);
  

  useEffect(() => {
    axios
      .get<Category[]>('https://api.escuelajs.co/api/v1/categories')
      .then(res => setCategories(res.data))
      .catch(console.error);
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        data={categories}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => (
          <View style={styles.itemContainer}>
            <ImageBackground
              source={{uri: item.image}}
              resizeMode="cover"
              style={styles.image}>
              <Text style={styles.text}>{item.name}</Text>
            </ImageBackground>
          </View>
        )}
      />
    </View>
  );
}
