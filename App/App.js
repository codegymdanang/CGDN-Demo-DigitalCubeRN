import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import createStore from './configureStore'
import RootScreen from '@containers/Root/RootScreen'
import { SafeAreaView } from 'react-navigation';

const { store, persistor } = createStore()

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <RootScreen />
          </PersistGate>
        </Provider>
      </SafeAreaView>
    )
  }
}
