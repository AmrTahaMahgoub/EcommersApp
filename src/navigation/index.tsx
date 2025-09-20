import { NavigationContainer } from '@react-navigation/native';
import MainStack from './main-stack';

export default function NavigationApp() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}
