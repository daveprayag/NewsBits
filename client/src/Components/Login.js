/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function loginUser(event) {
    event.preventDefault();
    try {
      setLoading(true);
      const response = await fetch("http://localhost:1337/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (data.user) {
        localStorage.setItem("token", data.user);
        // toast.success("Login successful!");
        navigate("/");
      } else {
        // toast.error("Invalid credentials");
      }
    } catch (error) {
      console.error(error);
      // toast.error("An error occurred");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div className="row border rounded-5 p-3 bg-white shadow box-area">
          <div
            className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box"
            style={{ background: "#000000" }}
          >
            <div className="featured-image mb-3">
              <img
                src="images/1.png"
                className="img-fluid"
                style={{ width: "250px" }}
              />
            </div>
            {/* ENTER IMAGE HERE */}
          </div>
          <div className="col-md-6 right-box px-4">
            <div className="row align-items-center">
              <div className="header-text mb-4">
                <h2 className="m-0">Hello, again</h2>
                <p>We are happy to have you back.</p>
              </div>
              <form onSubmit={loginUser}>
                <div className="input-group mb-3">
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    type="email"
                    className="form-control form-control-lg bg-light fs-6"
                    placeholder="Email address"
                  />
                </div>
                <div className="input-group mb-1">
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    type="password"
                    className="form-control form-control-lg bg-light fs-6"
                    placeholder="Password"
                  />
                </div>
                <div className="input-group mb-5">
                  <div className="forgot">
                    <small>
                      <Link to="/forgotpassword">Forgot Password?</Link>
                    </small>
                  </div>
                </div>
                <div className="input-group mb-3">
                  {loading ? (
                    <button
                      type="submit"
                      className="btn btn-lg btn-dark w-100 fs-6"
                      disabled
                    >
                      <span
                        className="spinner-border spinner-border-sm me-2"
                        role="status"
                        aria-hidden="true"
                      ></span>
                      Loading...
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="btn btn-lg btn-dark w-100 fs-6"
                    >
                      Login
                    </button>
                  )}
                </div>
              </form>
              <div className="input-group mb-3">
                <button className="btn btn-lg btn-light w-100 fs-6">
                  <img
                    src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
                    style={{ width: "20px" }}
                    className="me-2"
                  />
                  <small>Sign In with Google</small>
                </button>
              </div>
              <div className="row">
                <small>
                  Don't have account? <Link to="/signup">Sign Up</Link>
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
