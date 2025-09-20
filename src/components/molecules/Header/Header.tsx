import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Svgs} from '../../../assets';
import {Colors} from '../../../styles';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from './styles';

type HeaderProps = {
  title: string;
};
const Header: React.FC<HeaderProps> = ({title}) => {
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.goBack()}>
          <Svgs name="arrow" color={Colors.PRIMARY} />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>

        {title ? <Text style={styles.title}>{title}</Text> : null}
      </View>
    </>
  );
};

export default Header;
