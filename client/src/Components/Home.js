import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Home.css";
import jwt_decode from "jwt-decode";

function Home() {
  var [date, setDate] = useState(new Date());
  const [news, setNews] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    var today = setInterval(() => setDate(new Date()), 1000);
    var today = new Date();
    date = today.getMonth();

    return function cleanup() {
      clearInterval(today);
    };
  });

  async function populateLogin() {
    const req = await fetch("http://localhost:1337/api/home", {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    });

    const data = req.json();
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = jwt_decode(token);
      if (!user) {
        localStorage.removeItem("token");
        navigate("/login");
      } else {
        populateLogin();
      }
    }
  });

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("http://localhost:1337/api/news");
        const data = await response.json();
        setNews(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchNews();
  }, []);

  const token = localStorage.getItem("token");
  function clearToken() {
    localStorage.removeItem("token");
  }

  return (
    <>
      <div className="container">
        <header className="blog-header py-3">
          <div className="row flex-nowrap justify-content-between align-items-center">
            <div className="col-4">
              <p className="my-auto">
                {date.toLocaleDateString()}, {date.toLocaleTimeString()}
              </p>
            </div>
            <div className="col-4 text-center">
              <a className="blog-header-logo text-dark" href="#">
                NewsBits
              </a>
            </div>
            <div className="col-4 d-flex justify-content-end align-items-center">
              {token ? (
                <Link to="/">
                  <span
                    onClick={clearToken}
                    className="btn btn-sm btn-outline-secondary"
                  >
                    Logout
                  </span>
                </Link>
              ) : (
                <Link to="/login">
                  <span className="btn btn-sm btn-outline-secondary">
                    Login
                  </span>
                </Link>
              )}
            </div>
          </div>
        </header>

        <div className="nav-scroller py-1 mb-2">
          <nav className="nav d-flex justify-content-between">
            <a className="p-2 link-secondary" href="#">
              World
            </a>
            <a className="p-2 link-secondary" href="#">
              Nation
            </a>
            <a className="p-2 link-secondary" href="#">
              Technology
            </a>
            <a className="p-2 link-secondary" href="#">
              Entertainment
            </a>
            <a className="p-2 link-secondary" href="#">
              Sports
            </a>
            <a className="p-2 link-secondary" href="#">
              Business
            </a>
            <a className="p-2 link-secondary" href="#">
              Science
            </a>
            <a className="p-2 link-secondary" href="#">
              Health
            </a>
          </nav>
        </div>
      </div>

      <main className="container">
        <div className="p-4 p-md-5 mb-4 text-white rounded bg-dark">
          <div className="col-md-6 px-0">
            <h1 className="display-4 fst-italic">
              Title of a longer featured blog post
            </h1>
            <p className="lead my-3">
              Multiple lines of text that form the lede, informing new readers
              quickly and efficiently about what’s most interesting in this
              post’s contents.
            </p>
            <p className="lead mb-0">
              <a href="#" className="text-white fw-bold">
                Continue reading...
              </a>
            </p>
          </div>
        </div>

        <div className="row mb-2">
          {news.map((item) => (
            <div key={item._id} className="col-md-6">
              <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                  <strong className="d-inline-block mb-2 text-primary">
                    {item.Category}
                  </strong>
                  <h3 className="mb-0 news-title">{item.Title}</h3>
                  <div className="mb-1 news-date text-muted">
                    {item.Published_Date}
                  </div>
                  <p className="news-description mb-auto">{item.Description}</p>
                  <a
                    href={item.Link}
                    className="stretched-link"
                    target="_blank"
                  >
                    Continue reading
                  </a>
                </div>
                <div className="col-auto d-none d-lg-block">
                  <img
                    className="bd-placeholder-img"
                    width="200"
                    height="250"
                    src={item.Image}
                    alt="Thumbnail"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-success">
                  Design
                </strong>
                <h3 className="mb-0">Post title</h3>
                <div className="mb-1 text-muted">Nov 11</div>
                <p className="mb-auto">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
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
          </div> */}
      </main>

      <footer className="blog-footer">
        <p>©️ Copyright by NewsBits</p>
        <p>
          <a href="#">Back to top</a>
        </p>
      </footer>
    </>
  );
}

export default Home;
