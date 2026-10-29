
import { useRef } from "react";

function UncontrolledInput() {
  const nameRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();

    alert("Your Name: " + nameRef.current.value);
  }

  return (
    <div>
      <h2>Uncontrolled Input</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          ref={nameRef}
          defaultValue=""
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UncontrolledInput;



// - useRef(null) — input element ka reference store karega.
// - ref={nameRef} — input ko reference se connect karta hai.
// - nameRef.current.value — input mein entered value deta hai.
// - event.preventDefault() — form submit hone par page reload hone se rokta hai.
// - defaultValue="" — input ki initial value set karta hai.
// Yahan input ki value har typing par React state mein save nahi hoti. Submit hone par useRef se value read karte hain.