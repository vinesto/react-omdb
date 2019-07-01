import axios from 'axios'

export const searchMovies = (term = null) => {
    return (dispatch) => {

        dispatch({
            type: "SEARCH_LOADING"
        })

        axios({
            method: "POST",
            url: "http://localhost:4000/records/search",
            data: {
                keyword: term
            }
        })
            .then(res => {
                dispatch({
                    type: "SEARCH_SUCCESS",
                    payload: res.data.data.result[0].Search
                })
            })
            .catch(err => {
                dispatch({
                    type: "SEARCH_ERROR",
                })
                console.log(err)
            })
    }
}

export const detailMovie = (id) => {
    return (dispatch) => {

        dispatch({
            type: "SEARCH_DETAIL_LOADING"
        })

        axios({
            method: "GET",
            url: `http://localhost:4000/records/${id}`
        })
            .then(res => {
                // console.log('===res', res.data.data)
                dispatch({
                    type: "SEARCH_DETAIL_SUCCESS",
                    payload: res.data.data
                })
            })
            .catch(err => {
                dispatch({
                    type: "SEARCH_DETAIL_ERROR"
                })
            })

    }
}

export const openModal = (movie) => {
    // console.log('==>from action',movie)
    return (dispatch) => {
        dispatch({
            type: "OPEN_MODAL",
            payload: movie
        })
    }
}

export const closeModal = () => {
    return (dispatch) => {
        dispatch({
            type: "CLOSE_MODAL"
        })
    }
}


