import { BOOK_BASE_URL } from "../ApiConstants"
import { actionTypes } from "./actionTypes"

export const fetchGenres = () => {
    return (dispatch) => {
        fetch(`${BOOK_BASE_URL}api/v1/genres`)
        .then(res => res.json())
        .then(json => {
            dispatch({
                type: actionTypes.fetch_genres,
                payload: json.data
            })
        })
        .catch(err => console.log(err))
    }
}
