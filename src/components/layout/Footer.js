import React from "react";
import { css } from "@emotion/css";

const Footer = () => {
  return (
    <div
      className={css`
        color: white;
        background-color: #dc3545;
        padding: 10px;
        text-align: center;
        line-height: 1.5;
      `}
    >
      <p>
        &copy; 2021 Github Users Finder App
        <br /> Designed by{" "}
        <a
          className={css`
            color: white;
            &:hover {
              color: black;
            }
          `}
          href='https://noble-247.github.io/Emmanuel/'
          target='_blank'
          rel='noopener noreferrer'
        >
          Emmanuel
        </a>
      </p>
    </div>
  );
};

export default Footer;
