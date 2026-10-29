
import { useState } from "react";

function FunctionalStateUpdate() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(previousCount => previousCount + 1);
  }

  function increaseByFive() {
    setCount(previousCount => previousCount + 5);
  }

  return (
    <div>
      <h1>Functional State Update</h1>

      <h2>Count: {count}</h2>

      <button onClick={increaseCount}>
        Increase by 1
      </button>

      <button onClick={increaseByFive}>
        Increase by 5
      </button>
    </div>
  );
}

export default FunctionalStateUpdate;
