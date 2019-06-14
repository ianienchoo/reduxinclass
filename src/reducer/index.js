import {combineReducers} from 'redux'
import countReducer from './count-reducer'

let rootReducer = combineReducers({
  count: countReducer
})

export default rootReducer