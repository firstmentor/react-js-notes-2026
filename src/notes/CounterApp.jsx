
import { useState } from "react";

function CounterApp() {
  const [count, setCount] = useState(0);

  function updateCount() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counter App</h1>

      <h2>Count: {count}</h2>

      <button onClick={updateCount}>
        Update Count
      </button>
    </div>
  );
}

export default CounterApp;




// 1. What is useState?
// Definition: useState is a React Hook that allows a functional component to store and update state.

// Hinglish mein: useState React ka ek Hook hai, jiska use hum aisi value ko store aur update karne ke liye karte hain jiske change hone par screen bhi update honi chahiye.
