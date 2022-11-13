import { combineReducers } from "redux"
import { bookReducer } from "./bookReducer"
import { genreReducer } from "./genreReducer"

export const rootReducer = combineReducers({
    bookR: bookReducer,
    genreR: genreReducer
})