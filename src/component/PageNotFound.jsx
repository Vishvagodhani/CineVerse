import React from "react";
import { Link } from "react-router-dom";
// import "../../css/PageNotFound.css";
import "../../css/PageNotFound.css";
function PageNotFound() {
  return (
    <div className="not-found">
      <div className="not-found-content">
        <h1>404</h1>

        <h2>Page Not Found</h2>

        <p>
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>

        <Link to="/" className="home-btn">
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default PageNotFound;