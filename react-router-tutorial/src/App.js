import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from 	'./Home.js';
import About from './About.js';
import Abouteam from './Abouteam.js';
import Blog from './Blog';
import BlogDetails from './BlogDetails.js';
import Login from './Login.js';
import Dashboard from './Dashboard.js';




function App() {
  return (
    <div className="App">
        <nav>
          <Link to="/"> Home</Link> | {" "}
          <Link to="/about">About</Link> | {" "}
          <Link to="/blog">Blog</Link> | {" "}
          <Link to ="/login">Login</Link>
        </nav>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />}>
              {/* cara nested 2  */}
              <Route path="team" element={<Abouteam />}/>
              {/* membuat child dalam route about biar di nested 
                karena di child maka ga perlu buat /about/team nanti terjadi 2x pemanggilan 
              */}
            </Route>
            {/* cara nested 1  */}
            <Route path="about/abouteam" element={<Abouteam />} />
            <Route path="blog" element={<Blog/>}/>
            <Route path="blog/:id" element={<BlogDetails />} />
            {/* no match route */}
            <Route path="*" element={
               <h1>Eror 404</h1>
            }/>
            {/* login route */}
            <Route path="login" element={<Login />} />
            {/* dashboard route */}
            <Route path="dashboard" element={<Dashboard />} />
        </Routes>
    </div>
  );
}

export default App;
