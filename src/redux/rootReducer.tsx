import { combineReducers } from 'redux';
import projectsReducer from '../features/projectsData/projectsReducer';
import singleProjectReducer from '../features/singleProjectData/singleProjectReducer';
import menuReducer from '../features/menu/menuReducer';

const rootReducer = combineReducers({
    projects: projectsReducer,
    project: singleProjectReducer,
    menu: menuReducer
});

export default rootReducer;