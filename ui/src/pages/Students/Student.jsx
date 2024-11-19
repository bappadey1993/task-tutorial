import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Student() {
  const { id } = useParams();
  const [student, setStudent] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8081/student/" + id)
      .then((res) => {
        setStudent(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  return (
    <div>
      <div className="d-flex vh-50 bg-primary justify-content-center align-item-center">
        <div className="w-100 bg-white rounded p-3">
          <div className="p-2">
            <h2>Student details</h2>
            {/* {console.log(12345, student ? student : "No data")} */}
            <h2>{student.id}</h2>
            <h2>{student.name}</h2>
            <h2>{student.email}</h2>
            <h2>{student.phone}</h2>
          </div>
          <Link to="/student" className="btn btn-primary me-2">Back</Link>
          <Link to={`/student-edit/${student.id}`} className="btn btn-primary me-2">Edit</Link>
        </div>
      </div>
    </div>
  );
}
