import { BOOK_BASE_URL } from "../ApiConstants"
import { actionTypes } from "./actionTypes"

export const fetchBooks = () => {
    return (dispatch) => {
        fetch(`${BOOK_BASE_URL}api/v1/books`)
        .then(res => res.json())
        .then(json => {
            dispatch({
                type: actionTypes.fetch_books,
                payload: json.data.list
            })
        })
        .catch(err => console.log(err))
    }
}

export const fetchBookById = (id) => {
    return (dispatch) => {
        fetch(`${BOOK_BASE_URL}api/v1/books/${id}`)
        .then(res => res.json())
        .then(json => {
            console.log(json)
            dispatch({
                type: actionTypes.fetch_book_id,
                payload: json.data
            })
        })
        .catch(err => console.log(err))
    }
}

export const removeBookById = (id) => {
    return (dispatch) => {
        fetch(`${BOOK_BASE_URL}api/v1/books/${id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(json => {
            dispatch({
                type: actionTypes.remove_book_id,
                payload: json.data
            })

        })
    }
}

export const postBook = (objBook) => {
    return (dispatch) => {
        fetch(`${BOOK_BASE_URL}api/v1/books`, {
            method: 'POST',
            body: JSON.stringify(objBook),
            headers: {
                'Content-Type':'application/json'
            }
        })
        .then(res => res.json())
        .then(json => {
            console.log(json)
            dispatch({
                type: actionTypes.post_book,
                payload: json.data
            })
        })
    }
}