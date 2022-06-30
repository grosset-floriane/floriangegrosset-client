import { combineReducers } from 'redux';
import menuReducer from '../features/menu/menuReducer';

const rootReducer = combineReducers({
    menu: menuReducer
});

export default rootReducer;