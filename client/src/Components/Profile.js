import "./Profile.css";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

// const navigate = useNavigate();

function Profile() {
  return (
    <>
      <div className="container-fluid">
        <header className="profile-header py-3">
          <div className="row flex-nowrap justify-content-between align-items-center">
            <div className="col-4"></div>
            <div className="col-4 text-center">
              <a className="profile-header-logo text-dark">My Profile</a>
            </div>
            <div className="col-4 d-flex justify-content-end align-items-center">
              <Link to="/">
                <span className="btn btn-md btn-outline-secondary">Logout</span>
              </Link>
            </div>
          </div>
        </header>
      </div>

      <div class="container">
        <div class="row mt-4">
          <div class="col-md-8">
            <div class="card border-secondary">
              <div class="card-body">
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Full Name</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">John Doe</div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Username</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">johndoe</div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Email</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">johndoe@gmail.com</div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-12">
                    <a className="btn btn-md btn-outline-secondary">
                      Edit Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div className="row">
              <Link to="/profile/saved">
                <span className="btn btn-md btn-outline-secondary">Saved</span>
              </Link>
            </div>
            <div className="row my-3">
              <Link to="/forgotpassword">
                <span className="btn btn-md btn-outline-secondary">
                  Change Password
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
