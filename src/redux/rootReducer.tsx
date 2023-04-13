import {combineReducers} from 'redux'
import menuReducer from 'state/slices/menu.slice'
import notificationReducer from 'state/slices/notification.slice'

const rootReducer = combineReducers({
	menu: menuReducer,
	notification: notificationReducer,
})

export default rootReducer
