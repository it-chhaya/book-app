import { Link } from "react-router-dom"

const Article = () => {
    return (
        <div>
            <h1>Article Page</h1>
            <hr/>
            <Link to={'/'}>Go back Home</Link>
        </div>
    )
}

export default Article