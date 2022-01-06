import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NotFoundPage = (props) => {
  return (
    <div>
      <h2>404 Not Found</h2>
      <Link to="/">Welcome</Link>
    </div>
  );
};

NotFoundPage.propTypes = {};

export default NotFoundPage;
