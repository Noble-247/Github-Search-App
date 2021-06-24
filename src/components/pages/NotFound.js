import { css } from "@emotion/css";
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className='container text-center'>
      <div
        className={css`
          margin-top: 10vh;
          margin-bottom: 39.1vh;
          margin-left: 5rem;
          margin-right: 5rem;
        `}
      >
        <p className='text-uppercase large'>
          SORRY, LOOKS LIKE WE SENT YOU THE WRONG WAY{" "}
        </p>
        <p className='text-capitalize lead'>Let us guide you back</p>

        <Link to='/' className='btn btn-primary'>
          Head back to the homepage...
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
