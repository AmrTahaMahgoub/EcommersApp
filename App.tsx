import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import NavigationApp from './src/navigation';
import {store} from './src/redux/store/configureStore';

export default function App() {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{flex: 1}}>
        <NavigationApp />
      </GestureHandlerRootView>
    </Provider>
  );
}
