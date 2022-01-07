import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = (props) => {
  return (
    <div>
      <h2>404 Not Found</h2>
      <Link to="/">Welcome</Link>
    </div>
  );
};

export default NotFoundPage;
