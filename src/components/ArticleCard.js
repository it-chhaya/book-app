import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchBooks, removeBookById } from '../services/actions/bookAction'

function ArticleCard(props) {

  const onRemove = (id) => {
    let isConfirmed = window.confirm('Are you sure to remove?')
    if (isConfirmed) {
      props.removeBookById(id)
    }
  }

  return (
    <Card>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Author = {props.author}</Card.Subtitle>
        <Card.Text>
          {props.description}
        </Card.Text>
        <Button onClick={() => onRemove(props.id)} className='text-danger btn-link'>Remove</Button>
        <Link to={'/read/' + props.id } className='text-primary'>View</Link>
      </Card.Body>
    </Card>
  );
}

const mTp = (store) => {
  return {
    books: store.bookR.books
  }
}

export default connect(mTp, {fetchBooks, removeBookById}) (ArticleCard);