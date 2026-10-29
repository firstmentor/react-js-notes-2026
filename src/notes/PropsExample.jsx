
function Student(props) {
  return (
    <div>
      <h2>Student Name: {props.name}</h2>
    </div>
  );
}

function PropsExample() {
  return (
    <div>
      <h1>Props Example</h1>

      <Student name="Rahul" />
      <Student name="Amit" />
      <Student name="Priya" />
    </div>
  );
}

export default PropsExample;
