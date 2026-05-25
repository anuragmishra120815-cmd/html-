import React from "react";

function Student(props) {
  return (
    <div className="student-card">
      <div className="student-name">{props.name}</div>
      <div className="student-text">Course: {props.course}</div>
      <div className="student-text">Marks: {props.marks}</div>
    </div>
  );
}

export default Student;