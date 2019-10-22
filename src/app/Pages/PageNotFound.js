import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import CommonNavbar from '../Components/CommonNavbar';

export default function TeamPage() {
  return (
    <>
      <CommonNavbar style={teamPageNavbarStyle} />
      <div>page not found</div>
    </>
  );
}

const teamPageNavbarStyle = {
  background: "rgba(0, 120, 232, 0.6)",
}
