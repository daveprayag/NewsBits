import "./Profile.css";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

// const navigate = useNavigate();

function SavedNews() {
  return (
    <>
      <div className="container-fluid">
        <header className="profile-header py-3">
          <div className="row flex-nowrap justify-content-between align-items-center">
            <div className="col-4"></div>
            <div className="col-4 text-center">
              <a className="profile-header-logo text-dark">NewsBits</a>
            </div>
            <div className="col-4 d-flex justify-content-end align-items-center">
              <Link to="/">
                <span className="btn btn-md btn-outline-secondary">Logout</span>
              </Link>
            </div>
          </div>
        </header>
      </div>

      <div class="container rounded bg-white">
        <div class="row">
          <div class="col-md-11 border-right">
            <div class="py-3">
              <h4 className="m-0">Saved News</h4>
            </div>

            <div className="row">
              <div className="col-md-6 mb-2">
                <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                  <div className="col p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 text-primary">
                      India
                    </strong>
                    <h3 className="mb-0">Featured post</h3>
                    <div className="mb-1 text-muted">Nov 12</div>
                    <p className="card-text mb-auto">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content.
                    </p>
                    <a href="#" className="stretched-link">
                      Continue reading
                    </a>
                  </div>
                  <div className="col-auto d-none d-lg-block">
                    <svg
                      className="bd-placeholder-img"
                      width="200"
                      height="250"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-label="Placeholder: Thumbnail"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                    >
                      <title>Placeholder</title>
                      <rect width="100%" height="100%" fill="#55595c" />
                      <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                        Thumbnail
                      </text>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="col-md-6 mb-2">
                <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                  <div className="col p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 text-primary">
                      India
                    </strong>
                    <h3 className="mb-0">Featured post</h3>
                    <div className="mb-1 text-muted">Nov 12</div>
                    <p className="card-text mb-auto">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content.
                    </p>
                    <a href="#" className="stretched-link">
                      Continue reading
                    </a>
                  </div>
                  <div className="col-auto d-none d-lg-block">
                    <svg
                      className="bd-placeholder-img"
                      width="200"
                      height="250"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-label="Placeholder: Thumbnail"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                    >
                      <title>Placeholder</title>
                      <rect width="100%" height="100%" fill="#55595c" />
                      <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                        Thumbnail
                      </text>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="col-md-6 mb-2">
                <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                  <div className="col p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 text-primary">
                      India
                    </strong>
                    <h3 className="mb-0">Featured post</h3>
                    <div className="mb-1 text-muted">Nov 12</div>
                    <p className="card-text mb-auto">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content.
                    </p>
                    <a href="#" className="stretched-link">
                      Continue reading
                    </a>
                  </div>
                  <div className="col-auto d-none d-lg-block">
                    <svg
                      className="bd-placeholder-img"
                      width="200"
                      height="250"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-label="Placeholder: Thumbnail"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                    >
                      <title>Placeholder</title>
                      <rect width="100%" height="100%" fill="#55595c" />
                      <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                        Thumbnail
                      </text>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="col-md-6 mb-2">
                <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                  <div className="col p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 text-primary">
                      India
                    </strong>
                    <h3 className="mb-0">Featured post</h3>
                    <div className="mb-1 text-muted">Nov 12</div>
                    <p className="card-text mb-auto">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content.
                    </p>
                    <a href="#" className="stretched-link">
                      Continue reading
                    </a>
                  </div>
                  <div className="col-auto d-none d-lg-block">
                    <svg
                      className="bd-placeholder-img"
                      width="200"
                      height="250"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-label="Placeholder: Thumbnail"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                    >
                      <title>Placeholder</title>
                      <rect width="100%" height="100%" fill="#55595c" />
                      <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                        Thumbnail
                      </text>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="col-md-6 mb-2">
                <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                  <div className="col p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 text-danger">
                      Crime
                    </strong>
                    <h3 className="mb-0">Featured post</h3>
                    <div className="mb-1 text-muted">Nov 12</div>
                    <p className="card-text mb-auto">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content.
                    </p>
                    <a href="#" className="stretched-link">
                      Continue reading
                    </a>
                  </div>
                  <div className="col-auto d-none d-lg-block">
                    <svg
                      className="bd-placeholder-img"
                      width="200"
                      height="250"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-label="Placeholder: Thumbnail"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                    >
                      <title>Placeholder</title>
                      <rect width="100%" height="100%" fill="#55595c" />
                      <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                        Thumbnail
                      </text>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="col-md-6 mb-2">
                <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                  <div className="col p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 text-success">
                      Health
                    </strong>
                    <h3 className="mb-0">Featured post</h3>
                    <div className="mb-1 text-muted">Nov 12</div>
                    <p className="card-text mb-auto">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content.
                    </p>
                    <a href="#" className="stretched-link">
                      Continue reading
                    </a>
                  </div>
                  <div className="col-auto d-none d-lg-block">
                    <svg
                      className="bd-placeholder-img"
                      width="200"
                      height="250"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-label="Placeholder: Thumbnail"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                    >
                      <title>Placeholder</title>
                      <rect width="100%" height="100%" fill="#55595c" />
                      <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                        Thumbnail
                      </text>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-1">
            <div class="sticky-md-top p-3 py-5">
              <Link to="/profile">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="16"
                  fill="currentColor"
                  class="bi bi-chevron-left"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                  />
                </svg>
                Back
              </Link>
            </div>
          </div>
        </div>
      </div>

      <footer className="blog-footer">
        <p>©️ Copyright by NewsBits</p>
        <p>
          <a href="#">Back to top</a>
        </p>
      </footer>
    </>
  );
}

export default SavedNews;
