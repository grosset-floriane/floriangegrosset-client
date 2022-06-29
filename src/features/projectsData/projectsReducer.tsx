const initialState = {
    data: [],
    error: null
}

const projectsReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_PROJECTS':
            return { ...state, data: action.payload, error: null};
        case 'ERROR': 
            return { ...state, error: action.message }
        default:
            return state
    }
}

export default projectsReducer;