/**
 * @format
 */

import './global.css';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import { name as appName } from './app.json';
import { persistor, store } from './src/reduxstore/store';

const Root = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <SafeAreaProvider>
        <App />
      </SafeAreaProvider>
    </PersistGate>
  </Provider>
);

AppRegistry.registerComponent(appName, () => Root);
