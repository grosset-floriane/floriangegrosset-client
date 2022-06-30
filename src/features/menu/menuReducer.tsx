const initialState = {
    isOpen: false
}

interface Action {
    type: string
}

const menuReducer = (state = initialState, action: Action) => {
    switch(action.type) {
        case 'TOGGLE_MENU':
            return { ...state, isOpen: !state.isOpen };
        case 'CLOSE_MENU':
            return { ...state, isOpen: false };
        default:
            return state;
    }
}

export default menuReducer;