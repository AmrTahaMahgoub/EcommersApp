import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import {ImageBackground, View} from 'react-native';
import {styles} from './styles';

import {Images} from '../../assets/images';
import {getHeight, getWidth} from '../../styles/dimensions';
import {useNavigationHooks} from '../../hooks/navigation-hooks';

export default function Splash() {
  const {replace} = useNavigationHooks<any>();

  useEffect(() => {
    const t = setTimeout(() => {
      replace('BottomTabs');
    }, 400);
    return () => clearTimeout(t);
  }, [replace]);

  return (
    <View style={styles.rootScreen}>
      <ImageBackground source={Images.Eccomerce} style={styles.image} />
    </View>
  );
}
