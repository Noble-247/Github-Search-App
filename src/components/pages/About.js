import { css } from "@emotion/css";
import React from "react";

const About = () => {
  return (
    <div
      className={css`
        line-height: 1.5;
        margin-bottom: 65.5vh;
      `}
    >
      <h1>About This App</h1>
      <p>This App can be used to search Github users</p>
      <p>Version: 1.0.0</p>
    </div>
  );
};

export default About;
