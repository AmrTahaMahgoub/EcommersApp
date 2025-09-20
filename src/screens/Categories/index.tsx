import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, ImageBackground, Switch} from 'react-native';
import axios from 'axios';
import {styles} from './styles';
import { useTheme } from '../../components/Context/ThemeContext';
import { Colors } from '../../styles';

type Category = {
  id: number;
  name: string;
  image: string;
};

export default function CategoriesScreen() {
  const [categories, setCategories] = useState<Category[]>([]);
  const {theme, toggleTheme} = useTheme();
  const isDark = theme === 'dark';
  

  useEffect(() => {
    axios
      .get<Category[]>('https://api.escuelajs.co/api/v1/categories')
      .then(res => setCategories(res.data))
      .catch(console.error);
  }, []);

  return (
    <View style={[styles.container, {backgroundColor: isDark ? Colors.BLACK : Colors.WHITE}]}>
        <View style={styles.header}>
        <Text style={[styles.headerTitle, {color: isDark ? Colors.WHITE  : Colors.BLACK}]}>
          Categories
        </Text>
        <Switch
          value={isDark}
          onValueChange={toggleTheme}
          thumbColor={isDark ? Colors.WHITE : Colors.BLACK }
          trackColor={{false: '#ccc', true: '#666'}}
        />
      </View>
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
