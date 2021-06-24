import { css } from "@emotion/css";
import React, { Fragment } from "react";
import spinner from "./spinner.gif";
export const Spinner = () => {
  return (
    <Fragment>
      <img
        src={spinner}
        alt='Loading...'
        className={css`
          width: 200px;
          margin: auto;
          display: block;
        `}
      />
    </Fragment>
  );
};

export default Spinner;
