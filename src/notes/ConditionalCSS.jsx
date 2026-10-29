
import { useState } from "react";
import "./ConditionalCSS.css";

function ConditionalCSS() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "app dark" : "app light"}>
      <h1>Conditional Styling</h1>

      <p>
        {darkMode ? "Dark Mode Enabled" : "Light Mode Enabled"}
      </p>

      <button onClick={() => setDarkMode(!darkMode)}>
        Toggle Theme
      </button>
    </div>
  );
}

export default ConditionalCSS;
