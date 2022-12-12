import { combineReducers } from 'redux'
import menuReducer from 'state/slices/menu.slice'

const rootReducer = combineReducers({
	menu: menuReducer,
})

export default rootReducer
