import React, { Suspense, lazy } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Loader from "./components/Loader";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Posts = lazy(() => import("./pages/Posts"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/posts">Posts</Link>
      </nav>

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
