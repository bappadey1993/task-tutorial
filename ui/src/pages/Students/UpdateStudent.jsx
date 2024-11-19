import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function UpdateStudent() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
  });

  function handleUpdate(e) {
    e.preventDefault();
    console.log("Tesrt");
    axios
      .put("http://localhost:8081/student-edit/" + id, values)
      .then((res) => {
        // console.log("From update component: ", res.data[0]);
        setValues({
          ...values,
          name: res.data[0].name,
          email: res.data[0].email,
          phone: res.data[0].phone,
        });
      })
      .catch((err) => {
        console.log(err);
      });
      navigate('/student');
  }

  useEffect(() => {
    axios
      .get("http://localhost:8081/student/" + id)
      .then((res) => {
        // console.log("From update component: ", res.data[0]);
        setValues({
          ...values,
          name: res.data[0].name,
          email: res.data[0].email,
          phone: res.data[0].phone,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  return (
    <div>
      <div className="content-section">
        <h2>Update Student</h2>
        <form onSubmit={handleUpdate}>
          <div className="form-group">
            <label htmlFor="exampleInputName">Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputName"
              aria-describedby="nameHelp"
              placeholder="Enter Name"
              value={values.name}
              onChange={(e) => setValues({ ...values, name: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value={values.email}
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="Phone">Phone</label>
            <input
              type="text"
              className="form-control"
              id="Phone"
              placeholder="Mobile..."
              value={values.phone}
              onChange={(e) => setValues({ ...values, phone: e.target.value })}
            />
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <button className="btn btn-warning">
            <Link to="/student">Back</Link>
          </button>
        </form>
      </div>
    </div>
  );
}
