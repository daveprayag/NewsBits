/* eslint-disable no-redeclare */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Home.css";
import jwt_decode from "jwt-decode";

function Home() {
  var [date, setDate] = useState(new Date());
  const [news, setNews] = useState([]);
  const [filteredNews, setFilteredNews] = useState([]);
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
        setFilteredNews(data);
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

  const filterNews = (newsCategory) => {
    const updatedNews = news.filter((curElem) => {
      return curElem.Category === newsCategory;
    });
    setFilteredNews(updatedNews);
  };

  const resetFilter = () => {
    setFilteredNews(news);
  };

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
            <a className="p-2 link-secondary" href="#" onClick={resetFilter}>
              All
            </a>
            <a
              className="p-2 link-secondary"
              href="#"
              onClick={() => filterNews("WORLD")}
            >
              World
            </a>
            <a
              className="p-2 link-secondary"
              href="#"
              onClick={() => filterNews("NATION")}
            >
              Nation
            </a>
            <a
              className="p-2 link-secondary"
              href="#"
              onClick={() => filterNews("TECHNOLOGY")}
            >
              Technology
            </a>
            <a
              className="p-2 link-secondary"
              href="#"
              onClick={() => filterNews("ENTERTAINMENT")}
            >
              Entertainment
            </a>
            <a
              className="p-2 link-secondary"
              href="#"
              onClick={() => filterNews("SPORTS")}
            >
              Sports
            </a>
            <a
              className="p-2 link-secondary"
              href="#"
              onClick={() => filterNews("BUSINESS")}
            >
              Business
            </a>
            <a
              className="p-2 link-secondary"
              href="#"
              onClick={() => filterNews("SCIENCE")}
            >
              Science
            </a>
            <a
              className="p-2 link-secondary"
              href="#"
              onClick={() => filterNews("HEALTH")}
            >
              Health
            </a>
          </nav>
        </div>
      </div>

      <main className="container">
        {/* <div className="p-4 p-md-5 mb-4 text-white rounded bg-dark">
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
        </div> */}

        <div className="row mb-2">
          {filteredNews.map((item) => (
            <div key={item._id} className="col-md-6">
              <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative card-hover">
                <div className="col p-4 d-flex flex-column position-static">
                  <strong
                    className={`d-inline-block mb-2 text-${
                      item.Category === "TECHNOLOGY"
                        ? "primary"
                        : item.Category === "NATION"
                        ? "success"
                        : item.Category === "BUSINESS"
                        ? "danger"
                        : item.Category === "WORLD"
                        ? "secondary"
                        : item.Category === "ENTERTAINMENT"
                        ? "warning"
                        : item.Category === "HEALTH"
                        ? "info"
                        : "dark"
                    }`}
                  >
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
                    rel="noreferrer"
                  >
                    Continue reading
                  </a>
                </div>
                <div className="col-auto d-none d-lg-block align-self-center px-2">
                  <img
                    className="bd-placeholder-img rounded"
                    width="200"
                    height="150"
                    src={item.Image}
                    alt="Thumbnail"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
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
