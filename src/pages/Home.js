import { useEffect } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import ArticleCard from '../components/ArticleCard'
import { fetchBooks } from '../services/actions/bookAction'

const Home = (props) => {

    useEffect(() => {
		// Call API
		props.fetchBooks()
    }, [])

	return (
		<Container className="mt-4">
			<Row className='g-2 mb-4'>
				<Col md={12}>
					<Link to={'/addNewBook'} className='btn btn-outline-primary'>Add New Book</Link>
				</Col>
			</Row>
			<Row className='g-2'>
				{ props.books && props.books.map(book => (
                    <Col md={4} key={book.id}>
					    <ArticleCard
                            id={book.id}
                            title={book.title}
                            description={book.description}
                            author={book.author} />
				    </Col>
                )) }
			</Row>
		</Container>
	)
}

const mTp = (store) => {
	return {
		books: store.bookR.books
	}
}

export default connect(mTp, {fetchBooks}) (Home)
