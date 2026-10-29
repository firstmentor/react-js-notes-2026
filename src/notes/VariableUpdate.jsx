import React from 'react'

function VariableUpdate() {
    let count = 0;

  function updateCount() {
    count = count + 1;
    console.log(count);
  }
  return (
     <div>
      <h1>Counter App</h1>

      <h2>Count: {count}</h2>

      <button onClick={updateCount}>
        Update Count
      </button>
    </div>
  )
}

export default VariableUpdate