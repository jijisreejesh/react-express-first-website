import React, { useEffect, useState } from "react";
import axios from "axios";
import "./formdisplay.css";
function Formdisplay() {
  const [student, setStudent] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:2000/userget")
      .then((res) => {
        setStudent(res.data);
        console.log("Response : ", student);
      })
      .catch((err) => console.log("Error : ", err));
  }, []);
  return (
    <fieldset>
      <legend>STUDENTS</legend>
      {student.length > 0 ? (
        <table>
            <thead>
                <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Course</th>
                </tr>
            </thead>
            <tbody>
          {student.map((i) => (
            <tr key={i._id} id="studentdisp">
              <td>{i.name}</td>
              <td>{i.age}</td>
              <td>{i.course}</td>
            </tr>
          ))}
          </tbody>
        </table>
      ) : (
        <p>NO STUDENTS</p>
      )}
    </fieldset>
  );
}

export default Formdisplay;
