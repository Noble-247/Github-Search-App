import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className='container text-center' style={NotFoundStyles}>
      <p className='text-uppercase large'>
        SORRY, LOOKS LIKE WE SENT YOU THE WRONG WAY{" "}
      </p>
      <p className='text-capitalize lead'>Let us guide you back</p>

      <Link to='/' className='btn btn-primary'>
        Head back to the homepage...
      </Link>
    </div>
  );
};

const NotFoundStyles = {
  marginTop: "10vh",
  marginBottom: "39.1vh",
  marginLeft: "5rem",
  marginRight: "5rem",
};

export default NotFound;
