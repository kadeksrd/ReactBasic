import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";

function App() {
  return (
    <div className="app">
      <div className="brand">Website Berita Pesawat</div>
      <nav className="nav">
        <Link to="/" className="nav-item">
          Home
        </Link>
        <Link to="/profile" className="nav-item">
          Profile
        </Link>
        <Link to="/contact" className="nav-item">
          Contact
        </Link>
        <Link to="/blog" className="nav-item">
          Blog
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/blog/:id" element={<BlogDetails />}></Route> />
      </Routes>
    </div>
  );
}

export default App;
