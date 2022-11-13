import { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchBookById } from '../services/actions/bookAction'

const Read = (props) => {

	const { id } = useParams()

	useEffect(() => {
		props.fetchBookById(id)
		console.log(props.book)
	}, [])

	return (
		<Container>
			<Row className="justify-content-center">
				<Col md={8}>
					<h1>{props.book.title}</h1>
					<hr />
					<h4>{props.book.description}</h4>
					<p>{props.book.author}</p>
				</Col>
			</Row>
		</Container>
	)
}

const mTp = (store) => {
	return {
		book: store.bookR.book,
	}
}

export default connect(mTp, { fetchBookById }) (Read)
