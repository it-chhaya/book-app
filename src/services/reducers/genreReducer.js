import { actionTypes } from "../actions/actionTypes"

const initStates = {
    genres: []
}

export const genreReducer = (state = initStates, action) => {

    switch(action.type) {
        case actionTypes.fetch_genres:
            return {
                ...state, genres: action.payload
            }
        default:
            return state
    }

}