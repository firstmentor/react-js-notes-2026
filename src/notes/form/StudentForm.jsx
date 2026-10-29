
import { useState } from "react";

function StudentForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: ""
  });

  const [message, setMessage] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });

    setMessage("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!formData.name.trim()) {
      setMessage("Please enter your name.");
      return;
    }

    if (!formData.email.includes("@")) {
      setMessage("Please enter a valid email.");
      return;
    }

    if (!formData.course) {
      setMessage("Please select a course.");
      return;
    }

    setMessage("Registration successful!");
    console.log("Student Data:", formData);
  }

  function handleReset() {
    setFormData({
      name: "",
      email: "",
      course: ""
    });

    setMessage("");
  }

  return (
    <div>
      <h2>Student Registration</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </div>

        <br />

        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </div>

        <br />

        <div>
          <label>Course:</label>
          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
          >
            <option value="">Select Course</option>
            <option value="Full Stack">Full Stack Development</option>
            <option value="Data Analytics">Data Analytics</option>
            <option value="Python">Python</option>
          </select>
        </div>

        <br />

        <button type="submit">Register</button>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </form>

      <p>{message}</p>

      <h3>Live Preview</h3>
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
      <p>Course: {formData.course}</p>
    </div>
  );
}

export default StudentForm;
