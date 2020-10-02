import React from 'react'
import { Provider } from 'react-redux'
import Navigator from './src/navigation/index'
import { store, persistor } from './src/store'
import { PersistGate } from "redux-persist/integration/react";

console.disableYellowBox = true

export default function App() {
  return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Navigator />
        </PersistGate>
      </Provider>
  );
}
