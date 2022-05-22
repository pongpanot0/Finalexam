import './App.css';
import Navbar from './components/intro/Navbar';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import Topics from './components/Topics';
import About from './components/About';
const navbarLink = [
  { url: "/", title: "Home" },
  { url: "/About", title: "AboutUs" },
  { url: "/Topics", title: "Topics" },
]


function App() {
  return (
    <BrowserRouter>
      <>
        <Navbar navbarLinks={navbarLink} />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Topics" element={<Topics />} />
          <Route exact path="/About" element={<About />} />
        </Routes>

      </>
    </BrowserRouter>
  );
}

export default App;
