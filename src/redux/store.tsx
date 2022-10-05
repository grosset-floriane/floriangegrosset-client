// import { applyMiddleware } from 'redux'
import {configureStore} from '@reduxjs/toolkit'
// import thunk from 'redux-thunk'
import rootReducer from './rootReducer'

// TODO: add Thunk middleware
const store = configureStore({reducer: rootReducer})

export default store

export type RootState = ReturnType<typeof rootReducer>
