import React from "react";
import './style.css'
import 'font-awesome/css/font-awesome.min.css';
import { Link } from "react-router-dom";

export default function Register() {
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
            <form>
              {/* Name */}
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text h-100">
                    Name
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter name"
                />
              </div>

              {/* Email */}
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text h-100">
                    Email
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Email"
                />
              </div>

              {/* Phone */}
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text h-100">
                    Phone
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Email"
                />
              </div>

              {/* Gender */}
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text h-100">
                    Gender
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Email"
                />
              </div>

              {/* Password */}
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text h-100">
                    Password
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Password"
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
                  className="form-control"
                  placeholder="Confirm Password"
                />
              </div>
              <button type="button" className="btn btn-secondary btn-block">
                Register
              </button>
              {/* <div className="message">
                <div>
                  <input type="checkbox" /> Remember ME
                </div>
                <div>
                  <Link to="#">Forgot your password</Link>
                </div>
              </div> */}
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
