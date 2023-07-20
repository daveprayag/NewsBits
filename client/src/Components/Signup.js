/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function registerUser(event) {
    event.preventDefault();
    const response = await fetch("http://localhost:1337/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    const data = await response.json();
    if (data.status === "ok") {
      navigate("/login");
    } else {
      alert("Email already in use.");
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
            {/* <p
              className="text-white fs-2"
              style={{
                fontFamily: "Courier New",
                // font: Courier,
                // fontStyle: monospace,
                fontWeight: "600",
              }}
            >
              Be Verified
            </p>
            <small
              className="text-white text-wrap text-center"
              style={{
                width: "17rem",
                fontFamily: "Courier New",
                // Courier,
                // monospace,
              }}
            >
              Join experienced Designers on this platform.
            </small> */}
          </div>

          <div className="col-md-6 right-box px-4">
            <div className="row align-items-center">
              <div className="header-text mb-2">
                <h2 className="m-0">Hello there!</h2>
                <p>Let's get you signed up.</p>
              </div>
              <form onSubmit={registerUser}>
                <div className="input-group mb-3">
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    className="form-control form-control-lg bg-light fs-6"
                    required
                    placeholder="Full Name"
                  />
                </div>
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
                <div className="input-group mb-3">
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    type="password"
                    className="form-control form-control-lg bg-light fs-6"
                    placeholder="Password"
                  />
                </div>
                <div className="input-group mb-2">
                  <input
                    type="password"
                    required
                    className="form-control form-control-lg bg-light fs-6"
                    placeholder="Confirm Password"
                  />
                </div>
                <div className="input-group mb-3 mt-4">
                  <button
                    className="btn btn-lg btn-dark w-100 fs-6"
                    type="submit"
                  >
                    Register
                  </button>
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
                  Already have an account? <a href="/login">Login</a>
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
