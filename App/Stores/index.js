import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import UserReducer from './user'

const persistConfig = {
  key: 'root',
  storage,
  /**
   * Blacklist state that we do not need/want to persist
   */
  whitelist: [
    'user',
  ],
}

const rootReducer = combineReducers({
  user: UserReducer,
})

// Redux persist
const persistedReducer = persistReducer(persistConfig, rootReducer)

export default persistedReducer
