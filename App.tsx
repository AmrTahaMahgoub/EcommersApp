import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import NavigationApp from './src/navigation';
import {store} from './src/redux/store/configureStore';
import {ThemeProvider} from './src/components/Context/ThemeContext';

export default function App() {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{flex: 1}}>
        <ThemeProvider>
          <NavigationApp />
        </ThemeProvider>
      </GestureHandlerRootView>
    </Provider>
  );
}
