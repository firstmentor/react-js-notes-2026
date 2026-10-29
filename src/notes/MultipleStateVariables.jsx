import { useState } from "react";

function MultipleStateVariables() {
  const [name, setName] = useState("Rahul");
  const [age, setAge] = useState(20);
  const [city, setCity] = useState("Gwalior");
  return (
    <div>
      <h1>Student Details</h1>

      <h2>Name: {name}</h2>
      <h2>Age: {age}</h2>
      <h2>City: {city}</h2>

      <button onClick={() => setName("Amit")}>Change Name</button>

      <button onClick={() => setAge(age + 1)}>Increase Age</button>

      <button onClick={() => setCity("Delhi")}>Change City</button>
    </div>
  );
}

export default MultipleStateVariables;
