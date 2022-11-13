import { Link } from "react-router-dom"

const AppFooter = () => {
	return (
		<div className="container">
			<footer className="py-3 my-4">
				<ul className="nav justify-content-center border-bottom pb-3 mb-3">
					<li className="nav-item">
						<Link to={'/'} className="nav-link px-2 text-muted">
							Home
						</Link>
					</li>
					<li className="nav-item">
						<Link to={'/articles'} className="nav-link px-2 text-muted">
							Articles
						</Link>
					</li>
					<li className="nav-item">
						<Link to={'/about'} className="nav-link px-2 text-muted">
							About
						</Link>
					</li>
				</ul>
				<p className="text-center text-muted">© 2022 Company, Inc</p>
			</footer>
		</div>
	)
}

export default AppFooter
