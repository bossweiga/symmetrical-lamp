import {legacy_createStore as createStore} from 'redux'
import {testReducer} from './reducer'
const store= createStore(testReducer)
export default store