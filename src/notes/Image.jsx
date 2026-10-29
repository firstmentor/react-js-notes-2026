import React from 'react'
import logo1 from "../assets/logo.jpg";

function Image() {
  return (
    <div>
      <h2>Student Profile</h2>

      <img
        src="/logo.jpg"
        alt="logo"
        width="200"
        height="200"
      />
      <br />
      <img
        src={logo1}
        alt="logo1 "
        width="200"
      />
    </div>
  )
}

export default Image