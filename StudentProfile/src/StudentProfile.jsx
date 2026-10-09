function StudentProfile({ Name, Age, Course, City }) {
  return (
    <div className="card">
      <h2>Student Profile</h2>
      <p>Name: {Name}</p>
      <p>Age: {Age}</p>
      <p>Course: {Course}</p>
      <p>City: {City}</p>
    </div>
  );
}
export default StudentProfile;