import React from "react";
import "./ForgotPassword.css";

function ForgotPassword() {
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
          <div className="col-md-6 right-box">
            <div className="row align-items-center">
              <div className="header-text mb-4 text-center">
                <h2>Reset Password</h2>
              </div>
              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control form-control-lg bg-light fs-6"
                  placeholder="New Password"
                />
              </div>
              <div className="input-group mb-4">
                <input
                  type="password"
                  className="form-control form-control-lg bg-light fs-6"
                  placeholder="Confirm New Password"
                />
              </div>
              <div className="input-group">
                <button className="btn btn-lg btn-dark w-100 fs-6">
                  Set Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
