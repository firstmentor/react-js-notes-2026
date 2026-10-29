import React from "react";

function ConditionalIf() {
  const marks = 75;

  let result;

  if (marks >= 33) {
    result = "Student Pass Hai";
  } else {
    result = "Student Fail Hai";
  }

  return (
    <div>
      <h2>Student Result</h2>
      <p>Marks: {marks}</p>
      <h3>{result}</h3>
    </div>
  );
}

export default ConditionalIf;