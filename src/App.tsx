import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="container">
          <nav>
            <ul>
              <li>
                <Link to="/weblab">ホーム</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/weblab" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
