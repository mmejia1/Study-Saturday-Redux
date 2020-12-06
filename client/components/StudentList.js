import React from "react";
import { Link } from "react-router-dom";

const DUMMY_DATA = [
  {
    id: 1,
    fullName: "Jordan Walke",
    firstName: "Jordan",
    lastName: "Walke",
    email: "jw@react.com",
  },
  {
    id: 2,
    fullName: "Dan Abramov",
    firstName: "Dan",
    lastName: "Avramov",
    email: "da@react.com",
  },
];

class StudentList extends React.Component {
  constructor(props) {
    super(props);
  }
  //do we import info from store here?
  render() {
    return (
      <ul>
        {DUMMY_DATA.map((student) => (
          <li key={student.id}>
            <div>
              <p>Name: {student.fullName}</p>
              <p>Email: {student.email}</p>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

export connect(null,null)(students)

export default StudentList;
