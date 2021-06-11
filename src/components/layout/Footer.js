import React from "react";

const Footer = () => {
  return (
    <div style={FooterStyle}>
      <p>
        &copy; 2021 Github Users Finder App
        <br /> Designed by Emmanuel
      </p>
    </div>
  );
};

const FooterStyle = {
  color: "white",
  backgroundColor: "#dc3545",
  padding: "10px",
  textAlign: "center",
  lineHeight: "1.5",
};
export default Footer;
