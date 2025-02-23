import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { useLayoutEffect } from "react";

import "./index.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";

import Manage from "./pages/portfolio/Manage";
import Bookmark from "./pages/portfolio/Bookmark";
import Fylo from "./pages/portfolio/Fylo";
import Insure from "./pages/portfolio/Insure";
import Devjobs from "./pages/portfolio/Devjobs";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Resume from "./components/Resume";

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Header />
    <Wrapper>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route path="/portfolio">
          <Route
            index
            element={<Portfolio />}
          />
          <Route
            path="manage"
            element={<Manage />}
          />
          <Route
            path="devjobs"
            element={<Devjobs />}
          />
          <Route
            path="muglife"
            element={<Bookmark />}
          />
          <Route
            path="memory"
            element={<Insure />}
          />
          <Route
            path="fylo"
            element={<Fylo />}
          />
        </Route>
        <Route
          path="/contact"
          element={<Contact />}
        />
          <Route
          path="/resume"
          element={<Resume />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </Wrapper>
    <Footer />
  </Router>
);
