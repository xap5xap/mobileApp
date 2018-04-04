import React, { Component } from 'react'
import { Provider } from 'react-redux'
import HomeScreen from './HomeScreen'
import createStore from '../Redux'

const store = createStore()

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HomeScreen />
      </Provider>
    )
  }
}

export default App
