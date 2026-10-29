
import { useState } from "react";

function HideShow() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      <h1>Hide and Show Example</h1>

      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"}
      </button>

      {isVisible && (
        <p>
          Welcome to PNINFOSYS! Learn Skills. Build Projects.
          Get Job Ready.
        </p>
      )}
    </div>
  );
}

export default HideShow;
