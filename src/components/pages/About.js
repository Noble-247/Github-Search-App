import React from "react";

const About = () => {
  return (
    <div style={aboutPageStyles}>
      <h1>About This App</h1>
      <p>This App can be used to search Github users</p>
      <p>Version: 1.0.0</p>
    </div>
  );
};

const aboutPageStyles = {
  lineHeight: "1.5",
  marginBottom: "65.5vh",
};
export default About;
