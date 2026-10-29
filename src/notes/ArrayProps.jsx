
function Skills({ data }) {
  return (
    <div>
      <h2>Student Skills</h2>

      <ul>
        {data.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

function ArrayProps() {
  const skills = ["HTML", "CSS", "JavaScript", "React"];

  return (
    <div>
      <h1>Passing Array Through Props</h1>

      <Skills data={skills} />
    </div>
  );
}

export default ArrayProps;


// skills ek array hai.
// data={skills} poora array child component ko pass karta hai.
// data.map() array ke har element ko list item mein convert karta hai.
// key={index} har rendered item ko key deta hai. Dynamic lists mein stable unique ID ko key banana generally better hota hai.