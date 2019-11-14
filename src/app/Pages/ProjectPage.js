import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Fade from "react-reveal/Fade";

export default function ContactPage() {
  return (
    <div style={bgStyle}>
      <Fade bottom>Hi</Fade>
    </div>
  );
}

const bgStyle = {
  paddingBottom: 100
};
