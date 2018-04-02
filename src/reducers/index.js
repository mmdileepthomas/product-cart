// importing third party modules
import { combineReducers } from 'redux'
// importing reducers
import uiReducer from './uiReducer'
import itemsReducer from './itemsReducer'
// combingin reducers
export default combineReducers({
  ui:uiReducer,
  items:itemsReducer
})
