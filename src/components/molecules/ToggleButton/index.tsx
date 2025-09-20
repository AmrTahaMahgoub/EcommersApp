import React from 'react';
import {Switch, View, Text} from 'react-native';
import { useTheme } from '../../Context/ThemeContext';
import { Spacing, Typography } from '../../../styles';
import { styles } from './styles';


export default function ThemeToggle() {
  const {theme, toggleTheme} = useTheme();

  return (
    <View style={styles.main}>
      <Text style={styles.title}>
        {theme === 'light' ? 'Light Mode' : 'Dark Mode'}
      </Text>
      <Switch
        value={theme === 'dark'}
        onValueChange={toggleTheme}
        thumbColor={theme === 'dark' ? '#fff' : '#000'}
        trackColor={{false: '#ccc', true: '#666'}}
      />
    </View>
  );
}
