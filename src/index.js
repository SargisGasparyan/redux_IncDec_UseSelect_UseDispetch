import {createStore,bindActionCreators} from 'redux'
import Reducer from './reducer'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'
import {Provider} from 'react-redux'


const store = createStore(Reducer)
ReactDOM.render(
    <Provider store={store}>
  <App/>
    </Provider>,document.getElementById('root'))


