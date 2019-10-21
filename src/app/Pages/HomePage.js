import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import CommonNavbar from '../Components/CommonNavbar'
import Landing from '../Components/Landing'
import WhoWeAre from '../Components/WhoWeAre'

export default function HomePage() {
  return (
    <>
      <CommonNavbar style={homePageNavbarStyle}/>
      <Landing />
      <WhoWeAre />
    </>
  );
}

const homePageNavbarStyle = {
  opacity: 1,
  position: "absolute",
  width: "100%"
}
