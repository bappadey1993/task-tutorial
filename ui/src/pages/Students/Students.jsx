import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Students() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8081/")
      .then((response) => {
        // console.log('test=>',response.data)
        setData(response.data);
      })
      .catch((error) => {
        //try to fix the error or
        //notify the users about somenthing went wrong
        console.log(error.message);
      });
  }, []);

  function handleDelete(id) {
    // console.log(id);
    axios
      .delete("http://localhost:8081/student-delete/" + id)
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <div className="container-fluid d-flex justify-content-center align-items-center">
        <div className="row text-center d-flex align-items-center">
          <div className="home-panel container-fluid">
            <button className="d-flex flex-row">
              <Link to="/create-student">Create +</Link>
              <Link to="/">Home</Link>
            </button>
            <table>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                </tr>
              </thead>

              <tbody>
                
                {
                  data.map((student, index) => {
                  return (
                    <tr key={index}>
                      <td>{student.id}</td>
                      <td>{student.name}</td>
                      <td>{student.email}</td>
                      <td>{student.phone}</td>
                      <td>
                        <Link
                          to={`/student/${student.id}`}
                          className="btn btn-sm btn-info"
                        >
                          View
                        </Link>
                      </td>
                      <td>
                        <Link
                          to={`/student-edit/${student.id}`}
                          className="btn btn-sm btn-primary"
                        >
                          Edit
                        </Link>
                      </td>
                      <td>
                        <button
                          onClick={() => handleDelete(student.id)}
                          className="btn btn-danger"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })
              }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
