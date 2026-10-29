
import { useState } from "react";

function PasswordToggle() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <h1>Password Toggle</h1>

      <input
        type={showPassword ? "text" : "password"}
        placeholder="Enter password"
      />

      <button onClick={() => setShowPassword(!showPassword)}>
        {showPassword ? "Hide Password" : "Show Password"}
      </button>
    </div>
  );
}

export default PasswordToggle;
