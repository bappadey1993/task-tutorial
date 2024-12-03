import React, { useState } from "react";
import "./style.css";
import "font-awesome/css/font-awesome.min.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // Validation function for email and password
  const validateForm = () => {
    const errors = {};
    if (!email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!password) {
      errors.password = "Password is required";
    }
    return errors;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form fields
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      // Make API request to login
      const response = await axios.post("http://localhost:8081/api/auth/login",{email,password});
      console.log('response: ', response);
      if (response.data.success) {
        console.log(response);

        toast.success("Login successful!");
        // Redirect or save token as needed
        const token = response.data.token;
        console.log(token);

        sessionStorage.setItem("authToken", token);
        navigate("/dasboard");
        // fetchUserDetails();
      } else {
        toast.error(response.data.message || "Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
      toast.error(
        error.response.data.message ||
          "Something went wrong. Please try again later."
      );
    }
  };

  // useEffect(() => {

  // }, []);
  const fetchUserDetails = async () => {
    try {
      // Retrieve token from localStorage or other secure storage
      const token = sessionStorage.getItem("authToken"); // Replace with actual token retrieval
      console.log(token);

      if (!token) {
        // setError('User is not logged in');
        return;
      }

      // Make the API request with the token in the Authorization header
      const response = await axios.get(
        "http://localhost:3000/api/auth/get-userDetails",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response);

      if (response.data.success) {
        console.log(response.data.user);
      } else {
        console.log(response.data.message || "Failed to fetch user details");
      }
    } catch (err) {
      console.error("Error fetching user details:", err);
      console.log(err.response?.data?.message || "An error occurred");
    }
  };

  return (
    <>
      <div className="container d-none">
        <div className="form-box">
          <div className="header-form">
            <h4 className="text-primary text-center">
              Login <i className="fa fa-spinner fa-spin" />
            </h4>
            <div className="image"></div>
          </div>
          <div className="body-form">
            <form>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text h-100">
                    <i className="fa fa-user"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                />
              </div>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text h-100">
                    <i className="fa fa-lock"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Password"
                />
              </div>
              <button type="button" className="btn btn-secondary btn-block">
                LOGIN
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
                <Link to="/register">Register</Link>
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

      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <span className="error-message">{errors.email}</span>
            )}
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <span className="error-message">{errors.password}</span>
            )}
          </div>
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <p style={{ textAlign: "center" }}>
          Don't have an account?{" "}
          <Link
            to="/register"
            className="toggle-link"
            style={{ color: "#007BFF", textDecoration: "underline" }}
          >
            Sign Up
          </Link>
        </p>
      </div>
    </>
  );
}
