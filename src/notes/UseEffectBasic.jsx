import { useEffect, useState } from "react";

function UseEffectBasic() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]);

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default UseEffectBasic;


// English Definition: useEffect is a React Hook used to synchronize a component with external systems.

// Simple Hindi: Jab component ke render hone ke baad koi additional task karna ho, tab hum useEffect ka use kar sakte hain.

// Examples:
// - Browser tab ka title change karna.
// - API se students ka data lana.
// - Timer start aur stop karna.
// - Event listeners manage karna.