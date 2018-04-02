import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// third party modules
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reduxThunk from 'redux-thunk'
import 'materialize-css/dist/css/materialize.min.css'
// reducer
import reducers from  './reducers'
// store implementation
let store = createStore(reducers,{}, applyMiddleware(reduxThunk))
ReactDOM.render(<Provider store={store} basename={process.env.PUBLIC_URL} ><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
