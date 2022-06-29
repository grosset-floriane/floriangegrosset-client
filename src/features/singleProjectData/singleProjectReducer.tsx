const initialState = {
    data: [],
    error: null
}

const singleProjectReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_PROJECT':
            return { ...state, data: action.payload, error: null};
        case 'ERROR': 
            return { ...state, error: action.message }
        default:
            return state
    }
}

export default singleProjectReducer;