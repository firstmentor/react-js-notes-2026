
import "./StudentCard.css";

function StudentCard() {
  return (
    <div className="student-card">
      <div className="student-avatar">RJ</div>

      <h2>Rahul Jain</h2>
      <p className="student-course">
        Full Stack Development
      </p>

      <p>Location: Gwalior</p>

      <button className="profile-button">
        View Profile
      </button>
    </div>
  );
}

export default StudentCard;
