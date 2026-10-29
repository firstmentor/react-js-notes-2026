
function Student({ name, age, course }) {
  return (
    <div>
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
      <p>Course: {course}</p>
    </div>
  );
}

function DestructuringProps() {
  return (
    <div>
      <h1>Destructuring Props</h1>

      <Student
        name="Vikas"
        age={25}
        course="Full Stack Development"
      />
    </div>
  );
}

export default DestructuringProps;


// Props parent component se child component ko data pass karte hain.
// Props ko child component ke andar directly modify nahi karna chahiye. Props are read-only.
// Ek hi component ko alag props ke saath baar-baar use kar sakte hain.
// Props mein strings, numbers, arrays, objects aur functions bhi pass kiye ja sakte hain.
// Parent component ki state change hone par child dobara render ho sakta hai, agar uske rendered output par asar pade.