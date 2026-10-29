import React from "react";

function ConditionalTernary() {
  const isLoggedIn = true;

  return (
    <div>
      <h2>Login Status</h2>

      {isLoggedIn ? (
        <h3>Welcome to PNINFOSYS!</h3>
      ) : (
        <h3>Please Login First</h3>
      )}
    </div>
  );
}

export default ConditionalTernary;