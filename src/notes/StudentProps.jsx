
function Student(props) {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <h3>Age: {props.age}</h3>
      <p>Course: {props.course}</p>
    </div>
  );
}

function StudentProps() {
  return (
    <div>
      <h1>Student Information</h1>

      <Student
        name="Rahul"
        age={20}
        course="React JS"
      />

      <hr />

      <Student
        name="Priya"
        age={22}
        course="Data Analytics"
      />
    </div>
  );
}

export default StudentProps;
