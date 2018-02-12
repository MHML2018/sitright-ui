import React from 'react';
//import { StyleSheet, Text, View } from 'react-native';
import allReducers from './src/reducers/index.js';
import App from './src/App.js';
//import {createStore} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk'
import {createStore, applyMiddleware} from 'redux';

//Redux Store
const store = createStore(allReducers, applyMiddleware(thunk));
//const store = createStore(allReducers);


export default class App extends React.Component {
  render() {
      return (
        <Provider store= {store}>
          <App />
        </Provider>
      );
  /*  return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );*/
  }

}
/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
