import React from 'react'
import { useState } from "react";


function InputBoxseNameUpdateKarna() {
      const [name, setName] = useState("");

  return (
    <div>
      <h1>Get Input Value</h1>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <h2>Your Name: {name}</h2>
    </div>
  )
}

export default InputBoxseNameUpdateKarna



// value={name} input box ki value ko React state se connect karta hai.

// onChange tab chalta hai jab user input change karta hai.

// event.target.value input box mein currently likhi hui value deta hai.