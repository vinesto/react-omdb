const initialState = {
    isLoading: false,
    isError: false,
    movies: [],
    movie: {}
}

const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SEARCH_LOADING':
            return {
                ...state,
                isLoading: true
            }
        case 'SEARCH_SUCCESS':
            return {
                ...state,
                isLoading: false,
                movies: action.payload
            }
        case 'SEARCH_ERROR':
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case 'SEARCH_DETAIL_LOADING':
            return {
                ...state,
                isLoading: true
            }
        case 'SEARCH_DETAIL_SUCCESS':
            return {
                ...state,
                isLoading: false,
                movie: action.payload
            }
        case 'SEARCH_DETAIL_ERROR':
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        default:
            return state
    }
}

export default moviesReducer