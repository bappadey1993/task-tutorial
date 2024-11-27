import React, { useState } from "react";
import "./style.css";
import "font-awesome/css/font-awesome.min.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import UserModel from "../../model/userModel.js";
import axios from "axios";

export default function Register() {
  const [formValues, setFormValues] = useState(new UserModel({}));

  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    // console.log(formValues.name);
    if (!formValues.name) {
      errors.name = "Name is required";
    }
    // else if (/^[a-zA-Z]*$/.test(formValues.name)) {
    //   errors.name = "Name is required should be 3-15 characters long and can only contain letters, numbers, and underscores.';";
    // }
    if (!formValues.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!formValues.phone) {
      errors.phone = "Mobile number is required";
    }
    // else if (!/^\d{10}$/.test(formValues.phone)) {
    //   errors.phone = "Mobile number should be 10 digits";
    // }

    if (!formValues.password) {
      errors.password = "Password is required";
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log('Form clicked')
    // console.log(formValues);

    const errors = validateForm();
    // console.log(errors);
    if (Object.keys(errors).length === 0) {
      try {
        console.log("form data: ", formValues);
        axios
          .post("http://localhost:8081/api/auth/register-user", formValues)
          .then(response=> {
            console.log('res: ', response);
            if (response.data.success) {
              alert('success');
              toast.success(response.data.message || "Registration successful!");
              setFormValues({ name: "", email: "", phone: "", password: "", gender: "" });
              setFormErrors("");
            } else {
              toast.error(response.data.message || "Registration failed!");
            }
            // navigate('/student');
          })
          .catch((err) => console.log('err: ', err));
      } catch (error) {
        console.error("Error during registration:", error);
        toast.error(
          error.response.data.message || "Something went wrong. Please try again later."
        );
      }
    } else {
      // alert("Form Submission Failed");
      setFormErrors(errors);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <>
      <div className="container">
        <div className="form-box">
          <div className="header-form">
            <h4 className="text-primary text-center">
              Register <i className="fa fa-spinner fa-spin" />
            </h4>
            <div className="image"></div>
          </div>
          <div className="body-form">
            <form onSubmit={handleSubmit}>
              {/* Name */}
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text h-100">Name</span>
                </div>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Enter name"
                  value={formValues.name}
                  onChange={handleInputChange}
                />
              </div>
              {formErrors.name ? (
                <span className="error-message">{formErrors.name}</span>
              ) : (
                ""
              )}

              {/* Email */}
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text h-100">Email</span>
                </div>
                <input
                  type="text"
                  name="email"
                  className="form-control"
                  placeholder="Enter Email"
                  value={formValues.email}
                  onChange={handleInputChange}
                />
              </div>
              {formErrors.email ? (
                <span className="error-message">{formErrors.email}</span>
              ) : (
                ""
              )}

              {/* Phone */}
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text h-100">Phone</span>
                </div>
                <input
                  type="text"
                  name="phone"
                  className="form-control"
                  placeholder="Enter Email"
                  value={formValues.phone}
                  onChange={handleInputChange}
                />
              </div>
              {formErrors.phone ? (
                <span className="error-message">{formErrors.phone}</span>
              ) : (
                ""
              )}

              {/* Gender */}
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text h-100">Gender</span>
                </div>
                <input
                  type="text"
                  name="gender"
                  className="form-control"
                  placeholder="Enter Email"
                  value={formValues.gender}
                  onChange={handleInputChange}
                />
              </div>

              {/* Password */}
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text h-100">Password</span>
                </div>
                <input
                  type="text"
                  name="password"
                  className="form-control"
                  placeholder="Password"
                  value={formValues.password}
                  onChange={handleInputChange}
                />
              </div>

              {/* Confirm Password */}
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text h-100">
                    Confirm Password
                  </span>
                </div>
                <input
                  type="text"
                  name="confirm-password"
                  className="form-control"
                  placeholder="Confirm Password"
                  value={formValues.confirmPassword}
                  onChange={handleInputChange}
                />
              </div>
              <button type="submit" className="btn btn-secondary btn-block">
                Register
              </button>
              <div className="sign-new0user text-end">
                <Link to="/login">Login</Link>
              </div>
            </form>
            <div className="social">
              <Link>
                <i className="fa fa-facebook"></i>
              </Link>
              <Link href="#">
                <i className="fa fa-twitter-square"></i>
              </Link>
              <Link>
                <i className="fa fa-google"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
