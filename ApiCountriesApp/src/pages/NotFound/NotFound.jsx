import { Link } from "react-router-dom";
import "./NotFound.scss";
const NotFound = () => (
  <div className="not-found">
    <h1 className="not-found__heading">404</h1>
    <p className="not-found__description">
      Oops! The page you're looking for doesn't exist.
    </p>
    <Link to="/" className="not-found-link">
      Go Home
    </Link>
  </div>
);

export default NotFound;