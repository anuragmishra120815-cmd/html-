import React from "react";
import Student from "./Student";
import "./App.css";

function App() {
  return (
    <div className="page-wrapper">
      <div className="student-info-box">

        <h2 className="main-heading">Student Information</h2>

        <Student name="Rahul Sharma" course="CSE" marks="85" />
        <Student name="Anita Verma" course="IT" marks="92" />
        <Student name="Rohan Gupta" course="ECE" marks="78" />
        <Student name="Simran Kaur" course="ME" marks="88" />
        <Student name="Aman Yadav" course="CSE" marks="81" />
        <Student name="Neha Singh" course="IT" marks="95" />

      </div>
    </div>
  );
}

export default App;