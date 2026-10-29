
import { useState } from "react";

function ControlledInput() {
  const [name, setName] = useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <div>
      <h2>Controlled Input</h2>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleChange}
      />

      <h3>Your Name: {name}</h3>
    </div>
  );
}

export default ControlledInput;


// 1. Controlled Component
// React ke useState se input ki value control hoti hai.

// Example: Name input mein jo type karoge, woh React state mein save hoga.


// - useState("") — name ki initial value empty string hai.
// - value={name} — input ki value React state se aa rahi hai.
// - onChange={handleChange} — type karne par function chalega.
// - event.target.value — input mein abhi jo text hai, woh milega.
// - setName(...) — state update karega, jisse screen par name update hoga.
// Important: Controlled input mein value aur onChange dono ka use hota hai.