import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import rootReducer from './reducer'
import {createStore, applyMiddleware} from 'redux'
import reduxPromise from 'redux-promise'

let enhancedCreateStore =  applyMiddleware(reduxPromise)(createStore)

let store = enhancedCreateStore(rootReducer)

ReactDOM.render(<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'))

