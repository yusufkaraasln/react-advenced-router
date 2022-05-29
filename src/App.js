import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
} from "react-router-dom";

//pages
import Users from "./components/Users";
import User from "./components/User";
import About from "./components/About";
import Home from "./components/Home";
import Error404 from "./components/Error404";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/users/*" element={<Users />}>
            <Route path="user/:id" element={<User />}></Route>
          </Route>
          <Route path="*" element={<Error404 />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
