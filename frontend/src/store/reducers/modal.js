const initialState = {
    selectedMovie: {},
    modalIsOpen: false
}

const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'OPEN_MODAL':
            return {
                ...state,
                modalIsOpen: true,
                selectedMovie: action.payload.selectedMovie
            }
        case 'CLOSE_MODAL':
            return {
                ...state,
                modalIsOpen: false,
                selectedMovie: null
            }
        default:
            return state
    }
}

export default modalReducer