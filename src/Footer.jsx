import React from "react";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="about-footer">
          {/* <Router>
            <Routes>
              <Route exact path="/">
                <Link to="/about">
                  <h3>About</h3>
                </Link>
              </Route>
            </Routes>
          </Router> */}
          <Link to={"/about"} target="_blank">
            <h3>About</h3>
          </Link>
        </div>
        <div className="petrichor-facebook">
          <a href="https://www.facebook.com/petrichor.iitpkd" target="_blank">
            <h3>Petrichor Facebook</h3>
          </a>
        </div>
        <div className="petrichor-instagram">
          <a
            href="https://www.instagram.com/petrichor.iitpkd/?igshid=MDM4ZDc5MmU%3D"
            target="_blank"
          >
            <h3>Petrichor Instagram</h3>
          </a>
        </div>
      </footer>
    </>
  );
}
