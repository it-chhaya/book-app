import { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import { postBook } from '../services/actions/bookAction'
import { fetchGenres } from '../services/actions/genreAction'

const FormBook = (props) => {

	const [book, setBook] = useState({
		title: '',
		author: '',
		description: '',
        isPublished: true,
        fileId: 18,
        genreIds: []
	})

    const [genres, setGenres] = useState([])

	const bookValueChangeHandler = (e) => {
		// Destructuring
		const {name, value} = e.target
		setBook(prevState => {
			return {
				...prevState,
				[name]: value
			}
		})
	}

    const genreChangeHandler = (e) => {
		if (e.target.checked) {
			setGenres(prevState => {
				return [
					...prevState,
					e.target.value
				]
			})
		} else {
			let index = genres.indexOf(e.target.value)
			genres.splice(index, 1)
		}
	}

    const bookFormSubmitHandler = (e) => {
        e.preventDefault()

        book.genreIds = genres
        book.cover = 15
        book.pdf = 'book.pdf'

        props.postBook(book)

        book.title = ''
        book.author = ''
        book.description = ''

    }

    useEffect(() => {
        // Dispatch action fetchGenres to actionHandler
        props.fetchGenres()
    }, [])

	return (
		<Container className="mt-4">
			<h1 className="text-start fw-bold">Add a new book</h1>
			<hr />
			<Form onSubmit={bookFormSubmitHandler}>
				<Row>
					<Col md={6} className="text-start">
						<Form.Group className="mb-3" controlId="formBasicTitle">
							<Form.Label>Title</Form.Label>
							<Form.Control
								onChange={bookValueChangeHandler}
								type="text"
								name="title"
                                value={book.title}
								placeholder="How to learn web design"
							/>
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicAuthor">
							<Form.Label>Author</Form.Label>
							<Form.Control
								onChange={bookValueChangeHandler}
								type="text"
								name="author"
                                value={book.author}
								placeholder="ISTAD"
							/>
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicDescription">
							<Form.Label>Description</Form.Label>
							<Form.Control
								onChange={bookValueChangeHandler}
								as="textarea"
								name="description"
                                value={book.description}
								rows={4}
							/>
						</Form.Group>

						<Button variant="primary" type="submit">
							Save
						</Button>
					</Col>
					<Col md={6} className="text-start">
						<Form.Group className="mb-3" controlId="formBasicGenres">
							<Form.Label>Genres</Form.Label>
							{
                                props.genres && props.genres.map(genre => (
                                    <Form.Check onChange={genreChangeHandler}
                                        key={genre.id}
                                        value={genre.id}
                                        label={genre.title}
                                        name="genre" />
                                ))
                            }
						</Form.Group>
					</Col>
				</Row>
			</Form>
		</Container>
	)
}

const mTp = (store) => {
    return {
        books: store.bookR.books,
        genres: store.genreR.genres
    }
}

export default connect(mTp, {postBook,fetchGenres}) (FormBook)
